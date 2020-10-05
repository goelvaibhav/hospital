import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AdminHospitalComponent } from './admin-hospital/admin-hospital.component';
import { TechiHospitalComponent } from './techi-hospital/techi-hospital.component';
import { ManagerHospitalComponent } from './manager-hospital/manager-hospital.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TechiHospitalHistoryComponent } from './techi-hospital-history/techi-hospital-history.component';
import { TechiHospitalOrComponent } from './techi-hospital-or/techi-hospital-or.component';
import { TechiHospitalEmergencyComponent } from './techi-hospital-emergency/techi-hospital-emergency.component';
import { TechiHospitalDetailsComponent } from './techi-hospital-details/techi-hospital-details.component';
import { ManagerHospitalAlertComponent } from './manager-hospital-alert/manager-hospital-alert.component';
import { ManagerHospitalSearchTechiComponent } from './manager-hospital-search-techi/manager-hospital-search-techi.component';
import { ManagerHospitalHistoryComponent } from './manager-hospital-history/manager-hospital-history.component';
import { ManagerHospitalDetailsComponent } from './manager-hospital-details/manager-hospital-details.component';
import { ManagerHospitalOrPortfolioComponent } from './manager-hospital-or-portfolio/manager-hospital-or-portfolio.component';
import { AdminHospitalDeviceComponent } from './admin-hospital-device/admin-hospital-device.component';
import { AdminHospitalManageUserComponent } from './admin-hospital-manage-user/admin-hospital-manage-user.component';
import { HospitalDashBoardComponent } from './hospital-dash-board/hospital-dash-board.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminHospitalComponent,
    TechiHospitalComponent,
    ManagerHospitalComponent,
    SearchBarComponent,    
    TechiHospitalHistoryComponent, TechiHospitalOrComponent, TechiHospitalEmergencyComponent, TechiHospitalDetailsComponent, ManagerHospitalAlertComponent, ManagerHospitalSearchTechiComponent, ManagerHospitalHistoryComponent, ManagerHospitalDetailsComponent, ManagerHospitalOrPortfolioComponent, AdminHospitalDeviceComponent, AdminHospitalManageUserComponent, HospitalDashBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
