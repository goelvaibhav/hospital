import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerHospitalComponent } from './manager-hospital.component';

describe('ManagerHospitalComponent', () => {
  let component: ManagerHospitalComponent;
  let fixture: ComponentFixture<ManagerHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerHospitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
