import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalDashBoardComponent } from './hospital-dash-board.component';

describe('HospitalDashBoardComponent', () => {
  let component: HospitalDashBoardComponent;
  let fixture: ComponentFixture<HospitalDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalDashBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
