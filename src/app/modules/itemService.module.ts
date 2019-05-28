import { ItemService } from '../services/itemService/item.service';
import { ParametersService } from '../services/parameters.service';
import { NgModule } from '@angular/core';

@NgModule({
  providers: [
    ItemService,
    ParametersService
  ]
})


export class ItemServiceModule { }
