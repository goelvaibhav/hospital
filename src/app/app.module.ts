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

@NgModule({
  declarations: [
    AppComponent,
    AdminHospitalComponent,
    TechiHospitalComponent,
    ManagerHospitalComponent,
    SearchBarComponent
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
