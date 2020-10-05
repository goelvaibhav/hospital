import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechiHospitalEmergencyComponent } from './techi-hospital-emergency.component';

describe('TechiHospitalEmergencyComponent', () => {
  let component: TechiHospitalEmergencyComponent;
  let fixture: ComponentFixture<TechiHospitalEmergencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechiHospitalEmergencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechiHospitalEmergencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
