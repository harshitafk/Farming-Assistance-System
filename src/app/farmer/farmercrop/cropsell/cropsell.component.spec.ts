import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropsellComponent } from './cropsell.component';

describe('CropsellComponent', () => {
  let component: CropsellComponent;
  let fixture: ComponentFixture<CropsellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropsellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropsellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
