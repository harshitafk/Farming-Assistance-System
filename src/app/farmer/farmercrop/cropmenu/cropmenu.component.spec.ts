import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropmenuComponent } from './cropmenu.component';

describe('CropmenuComponent', () => {
  let component: CropmenuComponent;
  let fixture: ComponentFixture<CropmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
