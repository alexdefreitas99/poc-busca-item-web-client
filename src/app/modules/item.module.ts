import { NgModule } from '@angular/core';
import { BuscaItemComponent } from '../components/busca-item/busca-item.component';
import { ItemService } from '../services/itemService/item.service';
import { ModalModule } from './modal.module';

@NgModule({
  imports: [
    ModalModule
  ],
  declarations: [
    BuscaItemComponent
  ],
  providers: [
    ItemService
  ]
})

export class ItemModule { }
