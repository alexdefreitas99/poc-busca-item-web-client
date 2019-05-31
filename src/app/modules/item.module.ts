import { NgModule } from '@angular/core';
import { BuscaItemComponent } from '../components/busca-item/busca-item.component';
import { ItemService } from '../services/itemService/item.service';
import { CommonModule } from '@angular/common';
import { BootstrapModule } from './bootstrap.module';

@NgModule({
  imports: [
    BootstrapModule,
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
