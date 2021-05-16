import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersignupComponent } from './suppliersignup.component';

describe('SuppliersignupComponent', () => {
  let component: SuppliersignupComponent;
  let fixture: ComponentFixture<SuppliersignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliersignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliersignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
