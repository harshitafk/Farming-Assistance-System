import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrophomeComponent } from './crophome.component';

describe('CrophomeComponent', () => {
  let component: CrophomeComponent;
  let fixture: ComponentFixture<CrophomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrophomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrophomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
