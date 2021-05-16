import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerlogoutComponent } from './farmerlogout.component';

describe('FarmerlogoutComponent', () => {
  let component: FarmerlogoutComponent;
  let fixture: ComponentFixture<FarmerlogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerlogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerlogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
