import { TestBed } from '@angular/core/testing';

import { LoginmenuService } from './loginmenu.service';

describe('LoginmenuService', () => {
  let service: LoginmenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginmenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
