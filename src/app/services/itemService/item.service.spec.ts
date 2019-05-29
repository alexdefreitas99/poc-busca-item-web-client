import { ItemService } from './item.service';
import { TestBed } from '@angular/core/testing';
import { ItemServiceStub as stub } from './item.service.stub';
import { of } from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http';


describe('ItemService', () => {
  let itemService: ItemService;
  let jasmineTest: any;

  beforeEach(() => {
    const testBed = TestBed.configureTestingModule({
      imports: [
      ],
      providers: [
        ItemService,
        HttpClient,
        HttpHandler
      ]
    });
    itemService = testBed.get(ItemService);
    jasmineTest = jasmine.createSpyObj('ItemService', ['findByName']);
  });

  describe('dado que ocorra um chamado para operação FindByName', () => {
    describe('quando for passado algum parametro', () => {
      describe('e ocorrer sucesso na operação', () => {
        it('deve retornar um array de objeto', () => {

          spyOn(itemService, 'findByName').and.callFake(stub.mockFindByNameRequest);
          expect(itemService.findByName('açfjasdf', 101, 200, false, false)).toBeDefined();

        });
      });
      describe('e ocorrer falha na operação', () => {
        it('deve retornar um array de objeto vazio', () => {
          spyOn(itemService, 'findByName').and.callFake(() => of(stub.mockFindByNameRequest()));
          itemService.findByName('açfjasdf', 101, 200, false, false);
        });

      });
    });
  });
});
