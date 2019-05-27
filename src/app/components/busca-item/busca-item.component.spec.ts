import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaItemComponent } from './busca-item.component';

describe('BuscaItemComponent', () => {
  let component: BuscaItemComponent;
  let fixture: ComponentFixture<BuscaItemComponent>;


  // let masterService: MasterService;
  // let buscaItemComponent: jasmine.SpyObj<BuscaItemComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BuscaItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
