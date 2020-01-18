import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherDaysComponent } from './other-days.component';

describe('OtherDaysComponent', () => {
  let component: OtherDaysComponent;
  let fixture: ComponentFixture<OtherDaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherDaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
