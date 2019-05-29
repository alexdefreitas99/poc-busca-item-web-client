import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ModalItemComponent } from './modal-item.component';
describe('ModalItemComponent', () => {
  let component: ModalItemComponent;
  let fixture: ComponentFixture<ModalItemComponent>;
  beforeEach(() => {
    const bsModalRefStub = {};
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ModalItemComponent],
      providers: [{ provide: BsModalRef, useValue: bsModalRefStub }]
    });
    fixture = TestBed.createComponent(ModalItemComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
