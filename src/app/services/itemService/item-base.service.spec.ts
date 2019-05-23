import { TestBed } from '@angular/core/testing';

import { ItemBaseService } from './item-base.service';

describe('ItemBaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemBaseService = TestBed.get(ItemBaseService);
    expect(service).toBeTruthy();
  });
});
