import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerHospitalDetailsComponent } from './manager-hospital-details.component';

describe('ManagerHospitalDetailsComponent', () => {
  let component: ManagerHospitalDetailsComponent;
  let fixture: ComponentFixture<ManagerHospitalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerHospitalDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerHospitalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
