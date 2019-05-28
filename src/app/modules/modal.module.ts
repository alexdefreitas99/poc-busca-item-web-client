import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalItemComponent } from '../components/modal-item/modal-item.component';
import { BsModalRef } from 'ngx-bootstrap/modal/public_api';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ModalItemComponent
  ],
  providers: [
    BsModalRef
  ],
  entryComponents: [
    ModalItemComponent
  ]
})
export class ModalModule { }
