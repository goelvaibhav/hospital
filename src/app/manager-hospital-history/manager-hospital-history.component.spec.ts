import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerHospitalHistoryComponent } from './manager-hospital-history.component';

describe('ManagerHospitalHistoryComponent', () => {
  let component: ManagerHospitalHistoryComponent;
  let fixture: ComponentFixture<ManagerHospitalHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerHospitalHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerHospitalHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
