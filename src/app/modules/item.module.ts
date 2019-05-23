import { NgModule } from '@angular/core';
import { BuscaItemComponent } from '../components/busca-item/busca-item.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BuscaItemComponent
  ],
  exports: [
    BuscaItemComponent
  ]
})


export class ItemModule { }
