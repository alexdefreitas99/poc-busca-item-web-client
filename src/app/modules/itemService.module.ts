import { ItemService } from '../services/itemService/item.service';
import { ParametersService } from '../services/parameters.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

@NgModule({
  providers: [
    ItemService,
    ParametersService,
    HttpClientModule
  ]
})


export class ItemServiceModule { }
