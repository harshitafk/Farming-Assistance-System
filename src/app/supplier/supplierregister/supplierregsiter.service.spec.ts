import { TestBed } from '@angular/core/testing';

import { SupplierregsiterService } from './supplierregsiter.service';

describe('SupplierregsiterService', () => {
  let service: SupplierregsiterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupplierregsiterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
