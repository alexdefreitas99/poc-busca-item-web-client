// import { ItemService } from './item.service';
// import { TestBed } from '@angular/core/testing';
// import { ItemServiceStub as stub } from './item.service.stub';
// import { of } from 'rxjs';
// import { HttpClient, HttpHandler } from '@angular/common/http';


// describe('ItemService', () => {
//   let itemService: ItemService;

//   beforeEach(() => {
//     const testBed = TestBed.configureTestingModule({
//       imports: [
//       ],
//       providers: [
//         ItemService
//       ]
//     });
//     itemService = testBed.get(ItemService);
//   });

//   describe('dado que ocorra um chamado para operação item detalhe', () => {
//     describe('quando for passado algum parametro', () => {
//       describe('e ocorrer sucesso na operação', () => {
//         xit('deve retornar um array de objeto', () => {


//           expect(itemService.findItemDetalhe).toHaveBeenCalledWith(stub.mockFindPostItemDetalhe());

//         });
//       });
//       describe('e ocorrer falha na operação', () => {
//         xit('deve retornar um array de objeto vazio', () => {
//           spyOn(itemService, 'findByName').and.callFake(() => of(stub.mockFindByNameRequest()));
//           itemService.findByName('açfjasdf', 101, 200, false, false);
//         });

//       });
//     });
//   });
// });
