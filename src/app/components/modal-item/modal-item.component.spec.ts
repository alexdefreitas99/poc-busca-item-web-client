import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalItemComponent } from './modal-item.component';
import { BsModalRef } from 'ngx-bootstrap/modal';

describe('ModalItemComponent', () => {
  let component: ModalItemComponent;
  let fixture: ComponentFixture<ModalItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalItemComponent ], providers: [ BsModalRef ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
