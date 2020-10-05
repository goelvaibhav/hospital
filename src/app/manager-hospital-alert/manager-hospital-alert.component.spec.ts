import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerHospitalAlertComponent } from './manager-hospital-alert.component';

describe('ManagerHospitalAlertComponent', () => {
  let component: ManagerHospitalAlertComponent;
  let fixture: ComponentFixture<ManagerHospitalAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerHospitalAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerHospitalAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
