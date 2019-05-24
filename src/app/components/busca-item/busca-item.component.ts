import { Component, OnInit } from '@angular/core';
import { ItemBaseService } from '../../services/itemService/item-base.service';
import { ItemBase } from 'src/app/model/item/itemBase.model';
import { ItemDetalheService } from '../../services/itemService/item-detalhe.service';
import { ItemDetalhe } from 'src/app/model/mostruario/itemDetalhe.model';
import { Item } from 'src/app/model/mostruario/item.model';

@Component({
  selector: 'app-busca-item',
  templateUrl: './busca-item.component.html',
  styleUrls: ['./busca-item.component.css']
})
export class BuscaItemComponent implements OnInit {

  listItemBase: Array<ItemBase> = new Array<ItemBase>();
  lsitItemDetalhe: Array<ItemDetalhe> = new Array<ItemDetalhe>();

  constructor(private itemBaseService: ItemBaseService, private itemDetalheService: ItemDetalheService) { }

  ngOnInit() {
  }

  getItemByText(nome = 'parace',
                codigoFilial = 1,
                maxResult = 200,
                ordenarRentabilidade = false,
                ordenarPreco = false) {
    this.itemBaseService.findByName(nome, codigoFilial, maxResult, ordenarRentabilidade, ordenarPreco).subscribe((
      response: []) => {
      this.listItemBase = response;
    });
  }




  getDetalhe(itemDetalhe: ItemDetalhe) {
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
      response: ItemDetalhe[]    ) => {
        this.lsitItemDetalhe = response;
      });
  }
}
