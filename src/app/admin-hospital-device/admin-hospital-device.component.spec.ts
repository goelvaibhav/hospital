import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHospitalDeviceComponent } from './admin-hospital-device.component';

describe('AdminHospitalDeviceComponent', () => {
  let component: AdminHospitalDeviceComponent;
  let fixture: ComponentFixture<AdminHospitalDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHospitalDeviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHospitalDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
