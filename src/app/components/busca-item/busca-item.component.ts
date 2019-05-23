import { Component, OnInit } from '@angular/core';
import { ItemBaseService } from '../../services/itemService/item-base.service';
import { ItemBase } from 'src/app/model/item/itemBase.model';

@Component({
  selector: 'app-busca-item',
  templateUrl: './busca-item.component.html',
  styleUrls: ['./busca-item.component.css']
})
export class BuscaItemComponent implements OnInit {

  listItemBase: Array<ItemBase> = new Array<ItemBase>();

  constructor(private itemBaseService: ItemBaseService) { }

  ngOnInit() {
  }

  getByText(nome = 'parace',
            codigoFilial = 1,
            maxResult = 200,
            ordenarRentabilidade= false,
            ordenarPreco = false) {
    this.itemBaseService.findByName(nome, codigoFilial, maxResult, ordenarRentabilidade, ordenarPreco).subscribe((
      response: []) => {
      this.listItemBase = response;
    });
  }
}
