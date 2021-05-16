import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfarmingtipsComponent } from './viewfarmingtips.component';

describe('ViewfarmingtipsComponent', () => {
  let component: ViewfarmingtipsComponent;
  let fixture: ComponentFixture<ViewfarmingtipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewfarmingtipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewfarmingtipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
