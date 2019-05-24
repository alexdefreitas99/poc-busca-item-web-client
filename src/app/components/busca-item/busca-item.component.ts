import { Component, OnInit } from '@angular/core';
import { ItemBaseService } from '../../services/itemService/item-base.service';
import { ItemBase } from 'src/app/model/item/itemBase.model';
import { ItemDetalheService } from '../../services/itemService/item-detalhe.service';
import { ItemDetalhe } from 'src/app/model/mostruario/itemDetalhe.model';
import { Item } from 'src/app/model/mostruario/item.model';
import { ConsultaRegrasFiscais } from 'src/app/model/ConsultaRegrasFiscais';
import { ItemDetalheResponse } from '../../model/mostruario/itemDetalheResponse.model';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-busca-item',
  templateUrl: './busca-item.component.html',
  styleUrls: ['./busca-item.component.css']
})
export class BuscaItemComponent implements OnInit {

  listItemBase: Array<ItemBase> = new Array<ItemBase>();
  listItemDetalheResponse: Array<ItemDetalheResponse> = new Array<ItemDetalheResponse>();
  listItemEstoque: Array<ItemDetalhe> = new Array<ItemDetalhe>();

  constructor(private itemBaseService: ItemBaseService,
              private itemDetalheService: ItemDetalheService) { }

  ngOnInit() {
  }

  getItemByText(nome = 'parace',
                codigoFilial = 1,
                maxResult = 40,
                ordenarRentabilidade = false,
                ordenarPreco = false) {
    this.itemBaseService.findByName(nome, codigoFilial, maxResult, ordenarRentabilidade, ordenarPreco).subscribe((
      response: []) => {
      this.listItemBase = response;
      this.getDetalhe();
    });
  }

  getDetalhe() {
    const itemDetalhe: ItemDetalhe = new ItemDetalhe();
    itemDetalhe.consultaRegrasFiscais = new ConsultaRegrasFiscais();
    itemDetalhe.consultaRegrasFiscais.pais = 'BR';
    itemDetalhe.consultaRegrasFiscais.paisDestino = 'BR';
    itemDetalhe.consultaRegrasFiscais.uf = 'RS';
    itemDetalhe.consultaRegrasFiscais.ufDestino = 'RS';
    itemDetalhe.filial = 101;
    itemDetalhe.perfil = 1;
    this.listItemBase.map(item => {
      const itemMap: Item = new Item();
      itemMap.codigo = item.codigoItem;
      itemDetalhe.itens.push(itemMap);
    });
    this.itemDetalheService.findItemDetalhe(itemDetalhe).subscribe((
      response: any) => {
      this.listItemDetalheResponse = response.itens;
      this.listItemBase = new Array<ItemBase>();
      this.getEstoque();
    });
  }

  getEstoque() {
    let parametros = new HttpParams();
// tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.listItemDetalheResponse.length; i++) {
      parametros = parametros.append('itens', this.listItemDetalheResponse[i].codigo.toString());
   }
    const options = { params: parametros };
    this.itemDetalheService.findEstoqueByCodigo(options).subscribe((response: any) => {
      this.listItemEstoque = response;
      console.log(this.listItemEstoque);
      });
  }

  // createModel(){
  //   this.listItemDetalheResponse.map(item => {
  //     item.preco = this.
  //   })


  //   for (let index = 0; index < this.listItemDetalheResponse.length; index++) {
  //   }
  //   let itemDetalheResponse = new ItemDetalheResponse();
  //   this.listItemDetalheResponse.forEach(element => {
  //     itemDetalheResponse.estoque =
  //   });
  // }
}
