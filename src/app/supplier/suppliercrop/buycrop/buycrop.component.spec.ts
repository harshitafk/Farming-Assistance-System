import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuycropComponent } from './buycrop.component';

describe('BuycropComponent', () => {
  let component: BuycropComponent;
  let fixture: ComponentFixture<BuycropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuycropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuycropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
