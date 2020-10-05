import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerHospitalOrPortfolioComponent } from './manager-hospital-or-portfolio.component';

describe('ManagerHospitalOrPortfolioComponent', () => {
  let component: ManagerHospitalOrPortfolioComponent;
  let fixture: ComponentFixture<ManagerHospitalOrPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerHospitalOrPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerHospitalOrPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
