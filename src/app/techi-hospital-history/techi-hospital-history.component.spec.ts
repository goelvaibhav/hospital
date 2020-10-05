import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechiHospitalHistoryComponent } from './techi-hospital-history.component';

describe('TechiHospitalHistoryComponent', () => {
  let component: TechiHospitalHistoryComponent;
  let fixture: ComponentFixture<TechiHospitalHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechiHospitalHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechiHospitalHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
