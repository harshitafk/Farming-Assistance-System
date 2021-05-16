import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliercropmenuComponent } from './suppliercropmenu.component';

describe('SuppliercropmenuComponent', () => {
  let component: SuppliercropmenuComponent;
  let fixture: ComponentFixture<SuppliercropmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliercropmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliercropmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
