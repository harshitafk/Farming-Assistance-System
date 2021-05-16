import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuytransactionComponent } from './buytransaction.component';

describe('BuytransactionComponent', () => {
  let component: BuytransactionComponent;
  let fixture: ComponentFixture<BuytransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuytransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuytransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
