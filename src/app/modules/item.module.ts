import { NgModule } from '@angular/core';
import { BuscaItemComponent } from '../components/busca-item/busca-item.component';
import { CommonModule } from '@angular/common';
import { ItemService } from '../services/itemService/item.service';
import { ModalItemComponent } from '../components/modal-item/modal-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BuscaItemComponent,
    ModalItemComponent
  ],
  providers: [
    ItemService
  ],
  entryComponents: [
    ModalItemComponent
  ]

})

export class ItemModule { }
