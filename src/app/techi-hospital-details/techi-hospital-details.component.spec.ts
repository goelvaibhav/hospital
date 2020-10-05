import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechiHospitalDetailsComponent } from './techi-hospital-details.component';

describe('TechiHospitalDetailsComponent', () => {
  let component: TechiHospitalDetailsComponent;
  let fixture: ComponentFixture<TechiHospitalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechiHospitalDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechiHospitalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
