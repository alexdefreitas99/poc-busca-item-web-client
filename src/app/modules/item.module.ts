import { NgModule } from '@angular/core';
import { BuscaItemComponent } from '../components/busca-item/busca-item.component';
import { CommonModule } from '@angular/common';
import { ItemService } from '../services/itemService/item.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BuscaItemComponent,
  ],
  providers: [
    ItemService
  ]
})

export class ItemModule { }
