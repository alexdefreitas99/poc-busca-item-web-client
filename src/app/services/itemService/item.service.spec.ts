import { TestBed } from '@angular/core/testing';

import { ItemService } from './item.service';
import { ParametersService } from '../parameters.service';
import { Observable } from 'rxjs';

describe('ItemService', () => {

  let parametersService: ParametersService;
  let itemServiceSpy: jasmine.SpyObj<ItemService>;

  beforeEach(() => {

    const spy = jasmine.createSpyObj('ItemService', [
      'findByName', 'findItemDetalhe',
      'findEstoqueByCodigo', 'findPreco'
    ]);
    TestBed.configureTestingModule({
      providers: [
        ParametersService,
        { provide: ItemService, useValue: spy }
      ]
    });
    parametersService = TestBed.get(ParametersService);
    itemServiceSpy = TestBed.get(ItemService);
  });

  it('should be created', () => {
    itemServiceSpy = TestBed.get(ItemService);
    expect(itemServiceSpy).toBeTruthy();
  });

  // describe('testing method findByname ', () => {
  //   itemServiceSpy = TestBed.get(ItemService);
  //   it('should return undefined', () => {
  //     expect(itemServiceSpy.findByName()).toBeUndefined();
  //   });
  //   it('shoud return a observable', () => {
  //     expect(itemServiceSpy.findByName('parace', 101, 200, false, false)).toContain(Observable);
  //   })
  // });





});
