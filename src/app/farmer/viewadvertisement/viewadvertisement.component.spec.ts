import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewadvertisementComponent } from './viewadvertisement.component';

describe('ViewadvertisementComponent', () => {
  let component: ViewadvertisementComponent;
  let fixture: ComponentFixture<ViewadvertisementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewadvertisementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewadvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
