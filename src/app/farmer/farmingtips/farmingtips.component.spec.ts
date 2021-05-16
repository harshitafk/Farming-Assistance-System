import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmingtipsComponent } from './farmingtips.component';

describe('FarmingtipsComponent', () => {
  let component: FarmingtipsComponent;
  let fixture: ComponentFixture<FarmingtipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmingtipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmingtipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
