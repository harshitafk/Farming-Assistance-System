import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierhomeComponent } from './supplierhome.component';

describe('SupplierhomeComponent', () => {
  let component: SupplierhomeComponent;
  let fixture: ComponentFixture<SupplierhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
