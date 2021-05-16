import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuycrophomeComponent } from './buycrophome.component';

describe('BuycrophomeComponent', () => {
  let component: BuycrophomeComponent;
  let fixture: ComponentFixture<BuycrophomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuycrophomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuycrophomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
