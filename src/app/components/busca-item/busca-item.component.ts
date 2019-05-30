import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ItemResponseDetalhada } from '../../model/item/itemResponseDetalhada.model';
import { Item } from 'src/app/model/item/item.model';
import { ItemPost } from 'src/app/model/item/itemPost.model';
import { ConsultaRegrasFiscais } from 'src/app/model/any/consultaRegrasFiscais.model';
import { ItemService } from '../../services/itemService/item.service';
import { ItemResponseEstoque } from 'src/app/model/item/itemResponseEstoque.model';
import { ItemResponsePreco } from 'src/app/model/item/itemResponsePreco.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Imagem } from '../../model/any/imagem.model';
import { ModalItemComponent } from '../modal-item/modal-item.component';


@Component({
  selector: 'app-busca-item',
  templateUrl: './busca-item.component.html',
  styleUrls: ['./busca-item.component.css']
})
export class BuscaItemComponent implements OnInit {

  listItemDetalheResponse: Array<ItemResponseDetalhada> = new Array<ItemResponseDetalhada>();
  listItemEstoqueResponse: Array<ItemResponseEstoque> = new Array<ItemResponseEstoque>();
  listItemPrecoResponse: Array<ItemResponsePreco> = new Array<ItemResponsePreco>();

  modalRef: BsModalRef;

  ngOnInit() {
    this.buscaProduto('ibupro')
  }

  constructor(public itemService: ItemService,
              public toastr: ToastrService,
              public modalService: BsModalService) { }

  openModal(item: any) {
    this.modalService.config.animated = true;
    this.modalService.config.ignoreBackdropClick = true;
    this.modalRef = this.modalService.show(ModalItemComponent, { initialState: { item }, class: 'modal-lg' });
  }

  buscaProduto(nome: string) {
    if (nome.length > 2) {
      this.itemService.findByName(nome , 101, 40, false, false).subscribe((
        response: []) => {
        this.montaObjetoDoPostDetalhe(response);
      });
    } else {
      this.toastr.toastrConfig.preventDuplicates = true;
      this.toastr.toastrConfig.positionClass = 'toast-center-center';
      this.toastr.warning('Digite no mínimo três caracteres', 'Mensagem de aviso');
    }
  }


  montaObjetoDoPostDetalhe(responseFindByName) {
    const itemDetalhePost: ItemPost = new ItemPost();
    itemDetalhePost.consultaRegrasFiscais = new ConsultaRegrasFiscais();
    itemDetalhePost.consultaRegrasFiscais.pais = 'BR';
    itemDetalhePost.consultaRegrasFiscais.paisDestino = 'BR';
    itemDetalhePost.consultaRegrasFiscais.uf = 'RS';
    itemDetalhePost.consultaRegrasFiscais.ufDestino = 'RS';
    itemDetalhePost.filial = 101;
    itemDetalhePost.perfil = 1;
    itemDetalhePost.itens = new Array<Item>();
    responseFindByName.map(item => {
      const itemMap: Item = new Item();
      itemMap.codigo = item.codigoItem;
      itemDetalhePost.itens.push(itemMap);
    });
    responseFindByName = [];
    this.getDetalhe(itemDetalhePost);
  }

  getDetalhe(itemDetalhePost) {
    this.itemService.findItemDetalhe(itemDetalhePost).subscribe((
      response: any) => {
      this.listItemDetalheResponse = response.itens;
      this.getEstoque();
      this.getPreco();
    });
  }

  getEstoque() {
    let parametros = new HttpParams();
    for (const item of this.listItemDetalheResponse) {
      parametros = parametros.append('itens', item.codigo.toString());
    }
    this.itemService.findEstoqueByCodigo({ params: parametros }).subscribe((response: any) => {
      this.listItemEstoqueResponse = response;
    });
  }

  getPreco() {
    let parametros = new HttpParams();
    for (const item of this.listItemDetalheResponse) {
      parametros = parametros.append('item', item.codigo.toString());
    }
    this.itemService.findPreco({ params: parametros }, 101, 1).subscribe((response: any) => {
      this.listItemPrecoResponse = response;
      this.adicionaPrecoAndEstoqueNaLista();
    });
  }

  adicionaPrecoAndEstoqueNaLista() {
    this.listItemDetalheResponse.forEach((item, i) => {
      item.estoque = this.listItemEstoqueResponse.find((estoqueFiltro) =>
                    estoqueFiltro.codigoItem === item.codigo
                    ).estoqueLoja;
      item.preco = this.listItemPrecoResponse.find((precoFiltro) =>
                    precoFiltro.codigoItem === item.codigo
                    ).preco;

      if (item.dadosImagens.length === 0) {
        this.addImagemSeNaoExistir(item);
      }
    });
  }

  addImagemSeNaoExistir(item: ItemResponseDetalhada) {
    item.dadosImagens = new Array<Imagem>();
    const imagem = new Imagem();
    imagem.url = '../../../assets/images/sem-imagem.gif';
    item.dadosImagens.push(imagem);
  }
}
