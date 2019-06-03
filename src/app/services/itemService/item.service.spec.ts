import { TestBed } from '@angular/core/testing';
import { ParametersService } from '../parameters.service';
import { HttpClient } from '@angular/common/http';
import { ItemPost } from '../../model/item/itemPost.model';
import { ItemService } from './item.service';
describe('ItemService', () => {
  let service: ItemService;
  beforeEach(() => {
    const parametersServiceStub = { getValueFromProperties: arg1 => ({}) };
    const httpClientStub = {
      get: arg1 => ({}),
      post: (arg1, itemDetalhe2) => ({})
    };
    const itemPostStub = {};
    TestBed.configureTestingModule({
      providers: [
        ItemService,
        { provide: ParametersService, useValue: parametersServiceStub },
        { provide: HttpClient, useValue: httpClientStub },
        { provide: ItemPost, useValue: itemPostStub }
      ]
    });
    service = TestBed.get(ItemService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  describe('findItemDetalhe', () => {
    it('makes expected calls', () => {
      const parametersServiceStub: ParametersService = TestBed.get(
        ParametersService
      );
      const httpClientStub: HttpClient = TestBed.get(HttpClient);
      const itemPostStub: ItemPost = TestBed.get(ItemPost);
      spyOn(parametersServiceStub, 'getValueFromProperties').and.callThrough();
      spyOn(httpClientStub, 'post').and.callThrough();
      service.findItemDetalhe(itemPostStub);
      expect(parametersServiceStub.getValueFromProperties).toHaveBeenCalled();
      expect(httpClientStub.post).toHaveBeenCalled();
    });
  });
});
