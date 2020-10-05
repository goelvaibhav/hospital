import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechiHospitalOrComponent } from './techi-hospital-or.component';

describe('TechiHospitalOrComponent', () => {
  let component: TechiHospitalOrComponent;
  let fixture: ComponentFixture<TechiHospitalOrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechiHospitalOrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechiHospitalOrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
