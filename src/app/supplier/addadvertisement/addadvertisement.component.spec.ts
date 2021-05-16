import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddadvertisementComponent } from './addadvertisement.component';

describe('AddadvertisementComponent', () => {
  let component: AddadvertisementComponent;
  let fixture: ComponentFixture<AddadvertisementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddadvertisementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddadvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
