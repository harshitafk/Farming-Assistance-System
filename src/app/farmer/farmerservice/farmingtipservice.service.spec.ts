import { TestBed } from '@angular/core/testing';

import { FarmingtipserviceService } from './farmingtipservice.service';

describe('FarmingtipserviceService', () => {
  let service: FarmingtipserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmingtipserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
