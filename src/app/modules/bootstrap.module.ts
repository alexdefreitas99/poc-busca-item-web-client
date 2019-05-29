import { NgModule } from '@angular/core';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';
import { ModalItemComponent } from '../components/modal-item/modal-item.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ToastrModule.forRoot(),
    CommonModule
  ],
  declarations: [
    ModalItemComponent
  ],
  entryComponents: [
    ModalItemComponent
  ],
  providers: [
    BsModalRef
  ]
})
export class BootstrapModule { }
