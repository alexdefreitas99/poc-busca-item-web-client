import { BuscaItemComponent } from './busca-item.component';
import { TestBed, inject, ComponentFixture } from '@angular/core/testing';

import { ItemServiceStub } from '../../services/itemService/item.service.stub';
import { ItemService } from 'src/app/services/itemService/item.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { BootstrapModule } from '../../modules/bootstrap.module';


describe('BuscaItemComponent', () => {

  let component: BuscaItemComponent;
  let fixture: ComponentFixture<BuscaItemComponent>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BuscaItemComponent
      ],
      providers: [
        HttpClient,
        HttpHandler
      ],
      imports: [BootstrapModule]
    }).compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(BuscaItemComponent);
      component = fixture.componentInstance;

    });


    TestBed.overrideProvider(ItemService, {useValue: new ItemServiceStub()});

  });

  it('should be created item service', inject([ItemService], (service: ItemService) => {
    expect(service).toBeTruthy();
  }));

  // it('should be open the modal', () => {
  //   spyOn(component, 'openModal');
  // });

  // describe('dado que ocorra um chamado para operação FindByName', () => {
  //   describe('quando for passado algum parametro', () => {
  //     describe('e ocorrer sucesso na operação', () => {
  //       it('deve retornar um array de objeto', () => {
  //         spyOn(itemService, 'findByName').and.callFake(stub.);
  //         itemService.findByName();
  //       });
  //     });
  //     describe('e ocorrer falha na operação', () => {
  //       it('deve retornar um array de objeto vazio', () => {
  //         spyOn(itemService, 'findByName').and.callFake(() => of(stub.mockFindByNameRequest()));
  //         itemService.findByName('açfjasdf', 101, 200, false, false);
  //       });
  //     });
  //   });
  // });
});
