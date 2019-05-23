import { TestBed } from '@angular/core/testing';

import { ItemDetalheService } from './item-detalhe.service';

describe('ItemDetalheService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemDetalheService = TestBed.get(ItemDetalheService);
    expect(service).toBeTruthy();
  });
});
