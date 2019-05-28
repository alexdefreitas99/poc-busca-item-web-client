import { NgModule } from '@angular/core';
import { BuscaItemComponent } from '../components/busca-item/busca-item.component';
import { ItemService } from '../services/itemService/item.service';
import { ModalModule } from './modal.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    ModalModule,
    CommonModule
  ],
  declarations: [
    BuscaItemComponent
  ],
  providers: [
    ItemService
  ]
})

export class ItemModule { }
