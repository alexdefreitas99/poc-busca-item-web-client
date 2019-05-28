import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// Other imports
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ParametersService } from '../parameters.service';
import { ItemService } from './item.service';
import { ItemResponseDetalhada } from '../../model/item/itemResponseDetalhada.model';
import { ItemResponse } from '../../model/item/itemResponse.model';

describe('HttpClient testing', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let itemService: ItemService;
  let parametersService: ParametersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // Import the HttpClient mocking services
      imports: [ HttpClientTestingModule ],
      // Provide the service-under-test and its dependencies
      providers: [
        ItemService,
        ParametersService
      ]
    });
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    itemService = TestBed.get(ItemService);
    parametersService = TestBed.get(ParametersService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('get list of itens', () => {
    let expectedItens: ItemResponse[];

    beforeEach(() => {
      itemService = TestBed.get(ItemService);
      expectedItens = [
        {
            codigoItem: 325538,
            nomenclaturaVarejo: 'ROACUTAN 20MG 30 CAP          C2',
            nomeDetalhado: 'Roacutan 20mg 30 Cápsulas',
            possuiItemAVencer: true,
            participaPbm: false,
            participaNovoPack: false,
            permiteAdesao: false,
            possuiKitAdesao: false,
            exclusivoPanvel: false,
            participaListaReferencial: false,
            participaFarmaciaPopular: false
        },
        {
            codigoItem: 374008,
            nomenclaturaVarejo: 'ROACUTAN 10MG 30 CAP          C2',
            nomeDetalhado: 'Roacutan 10mg 30 Cápsulas',
            possuiItemAVencer: false,
            participaPbm: false,
            participaNovoPack: false,
            permiteAdesao: false,
            possuiKitAdesao: false,
            exclusivoPanvel: false,
            participaListaReferencial: false,
            participaFarmaciaPopular: false
        }
    ] as ItemResponse[ ];
    });

    // it('should return expected itens', () => {
    //   itemService.findByName('roacutan', 101, 200, false, false).subscribe(
    //     itens => expect(itens).toEqual(
    //       expectedItens, 'Should return expected itens'
    //     ), fail
    //   );
    // });


    it('should turn 404 into an empty itens result', () => {

      itemService.findByName('adfadsfasdf', 101, 200, false, false).subscribe(
        itens => expect(itens.length).toEqual(0, 'should return empty itens array'),
        fail
      );

      // const req = httpTestingController.expectOne(itemService.heroesUrl);

      // // respond with a 404 and the error message in the body
      // const msg = 'deliberate 404 error';
      // req.flush(msg, {status: 404, statusText: 'Not Found'});
    });

  });

});
