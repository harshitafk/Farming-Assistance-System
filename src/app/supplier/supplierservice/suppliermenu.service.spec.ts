import { TestBed } from '@angular/core/testing';

import { SuppliermenuService } from './suppliermenu.service';

describe('SuppliermenuService', () => {
  let service: SuppliermenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuppliermenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
