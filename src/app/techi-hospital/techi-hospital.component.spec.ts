import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechiHospitalComponent } from './techi-hospital.component';

describe('TechiHospitalComponent', () => {
  let component: TechiHospitalComponent;
  let fixture: ComponentFixture<TechiHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechiHospitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechiHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
