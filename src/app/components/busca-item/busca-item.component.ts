import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ItemResponse } from '../../model/item/itemResponse.model';
import { ItemResponseDetalhada } from '../../model/item/itemResponseDetalhada.model';
import { Item } from 'src/app/model/item/item.model';
import { ItemPost } from 'src/app/model/item/itemPost.model';
import { ConsultaRegrasFiscais } from 'src/app/model/any/consultaRegrasFiscais.model';
import { ItemService } from '../../services/itemService/item.service';
import { ItemResponseEstoque } from 'src/app/model/item/itemResponseEstoque.model';
import { ItemResponsePreco } from 'src/app/model/item/itemResponsePreco.model';

@Component({
  selector: 'app-busca-item',
  templateUrl: './busca-item.component.html',
  styleUrls: ['./busca-item.component.css']
})
export class BuscaItemComponent implements OnInit {

  listItemBase: Array<ItemResponse> = new Array<ItemResponse>();
  listItemDetalheResponse: Array<ItemResponseDetalhada> = new Array<ItemResponseDetalhada>();
  listItemEstoqueResponse: Array<ItemResponseEstoque> = new Array<ItemResponseEstoque>();
  listItemPrecoResponse: Array<ItemResponsePreco> = new Array<ItemResponsePreco>();
  itemPesquisa: string;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  buscaProduto( nome: string,
                codigoFilial = 1,
                maxResult = 40,
                ordenarRentabilidade = false,
                ordenarPreco = false) {
    this.itemService.findByName(nome, codigoFilial, maxResult, ordenarRentabilidade, ordenarPreco).subscribe((
      response: []) => {
      this.listItemBase = response;
      this.getDetalhe();
    });
  }

  getDetalhe() {
    const itemDetalhePost: ItemPost = new ItemPost();
    itemDetalhePost.consultaRegrasFiscais = new ConsultaRegrasFiscais();
    itemDetalhePost.consultaRegrasFiscais.pais = 'BR';
    itemDetalhePost.consultaRegrasFiscais.paisDestino = 'BR';
    itemDetalhePost.consultaRegrasFiscais.uf = 'RS';
    itemDetalhePost.consultaRegrasFiscais.ufDestino = 'RS';
    itemDetalhePost.filial = 101;
    itemDetalhePost.perfil = 1;
    this.listItemBase.map(item => {
      const itemMap: Item = new Item();
      itemMap.codigo = item.codigoItem;
      itemDetalhePost.itens.push(itemMap);
    });
    this.itemService.findItemDetalhe(itemDetalhePost).subscribe((
      response: any) => {
      this.listItemDetalheResponse = response.itens;
      this.listItemBase = new Array<ItemResponse>();
      this.getEstoque();
      this.getPreco();
    });
  }

  getEstoque() {
    let parametros = new HttpParams();
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.listItemDetalheResponse.length; i++) {
      parametros = parametros.append('itens', this.listItemDetalheResponse[i].codigo.toString());
    }
    const options = { params: parametros };
    this.itemService.findEstoqueByCodigo(options).subscribe((response: any) => {
      this.listItemEstoqueResponse = response;
    });
  }

  getPreco() {
    let parametros = new HttpParams();
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.listItemDetalheResponse.length; i++) {
      parametros = parametros.append('item', this.listItemDetalheResponse[i].codigo.toString());
    }
    const options = { params : parametros };
    this.itemService.findPreco(options, 101, 1).subscribe((response: any) => {
      this.listItemPrecoResponse = response;
      this.adicionaPrecoAndEstoqueNaLista();
    });
  }

  adicionaPrecoAndEstoqueNaLista() {
    this.listItemDetalheResponse.forEach((item, i) => {
      const estoqueFiltrado = this.listItemEstoqueResponse.filter((estoqueFiltro) =>
      estoqueFiltro.codigoItem === item.codigo
      );
      const precoFiltrado = this.listItemPrecoResponse.filter((precoFiltro) =>
      precoFiltro.codigoItem === item.codigo
      );
      item.estoque = estoqueFiltrado[0].estoqueLoja;
      item.preco = precoFiltrado[0].preco;
    });
  }


}
