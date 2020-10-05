import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerHospitalSearchTechiComponent } from './manager-hospital-search-techi.component';

describe('ManagerHospitalSearchTechiComponent', () => {
  let component: ManagerHospitalSearchTechiComponent;
  let fixture: ComponentFixture<ManagerHospitalSearchTechiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerHospitalSearchTechiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerHospitalSearchTechiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
