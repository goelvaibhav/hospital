import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHospitalManageUserComponent } from './admin-hospital-manage-user.component';

describe('AdminHospitalManageUserComponent', () => {
  let component: AdminHospitalManageUserComponent;
  let fixture: ComponentFixture<AdminHospitalManageUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHospitalManageUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHospitalManageUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
