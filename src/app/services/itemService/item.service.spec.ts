import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { ItemPost } from '../../model/item/itemPost.model';
import { ItemService } from './item.service';
describe('ItemService', () => {
  let service: ItemService;
  beforeEach(() => {
    const httpClientStub = {
      get: arg1 => ({}),
      post: (arg1, itemDetalhe2) => ({})
    };
    const itemPostStub = {};
    TestBed.configureTestingModule({
      providers: [
        ItemService,
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
      const httpClientStub: HttpClient = TestBed.get(HttpClient);
      const itemPostStub: ItemPost = TestBed.get(ItemPost);
      spyOn(httpClientStub, 'post').and.callThrough();
      service.findItemDetalhe(itemPostStub);
      expect(httpClientStub.post).toHaveBeenCalled();
    });
  });
  describe('findByName', () => {
    it('makes expected calls', () => {
      const httpClientStub: HttpClient = TestBed.get(HttpClient);
      spyOn(httpClientStub, 'get').and.callThrough();
      service.findByName('aaa', 101, 200, false, false);
      expect(httpClientStub.get).toHaveBeenCalled();
    });
  });
  describe('findEstoqueByCodigo', () => {
    it('makes expected calls', () => {
      const httpClientStub: HttpClient = TestBed.get(HttpClient);
      spyOn(httpClientStub, 'get').and.callThrough();
      service.findEstoqueByCodigo('');
      expect(httpClientStub.get).toHaveBeenCalled();
    });
  });
  describe('findPreco', () => {
    it('makes expected calls', () => {
      const httpClientStub: HttpClient = TestBed.get(HttpClient);
      spyOn(httpClientStub, 'get').and.callThrough();
      service.findPreco('', 101, 101);
      expect(httpClientStub.get).toHaveBeenCalled();
    });
  });
});
