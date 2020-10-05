import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHospitalDeviceComponent } from './admin-hospital-device/admin-hospital-device.component';
import { AdminHospitalManageUserComponent } from './admin-hospital-manage-user/admin-hospital-manage-user.component';
import { AdminHospitalComponent } from './admin-hospital/admin-hospital.component';
import { HospitalDashBoardComponent } from './hospital-dash-board/hospital-dash-board.component';
import { ManagerHospitalAlertComponent } from './manager-hospital-alert/manager-hospital-alert.component';
import { ManagerHospitalDetailsComponent } from './manager-hospital-details/manager-hospital-details.component';
import { ManagerHospitalHistoryComponent } from './manager-hospital-history/manager-hospital-history.component';
import { ManagerHospitalOrPortfolioComponent } from './manager-hospital-or-portfolio/manager-hospital-or-portfolio.component';
import { ManagerHospitalSearchTechiComponent } from './manager-hospital-search-techi/manager-hospital-search-techi.component';
import { ManagerHospitalComponent } from './manager-hospital/manager-hospital.component';
import { TechiHospitalDetailsComponent } from './techi-hospital-details/techi-hospital-details.component';
import { TechiHospitalEmergencyComponent } from './techi-hospital-emergency/techi-hospital-emergency.component';
import { TechiHospitalHistoryComponent } from './techi-hospital-history/techi-hospital-history.component';
import { TechiHospitalOrComponent } from './techi-hospital-or/techi-hospital-or.component';
import { TechiHospitalComponent } from './techi-hospital/techi-hospital.component';


const routes: Routes = [
  
  {path: 'techi', component:TechiHospitalComponent},  
  {path: 'techi/history', component:TechiHospitalHistoryComponent},
  {path: 'techi/emergency', component:TechiHospitalEmergencyComponent},
  {path: 'techi/or', component:TechiHospitalOrComponent},
  {path: 'techi/details', component:TechiHospitalDetailsComponent},

  {path:'manager', component:ManagerHospitalComponent},
  {path: 'manager/alert', component:ManagerHospitalAlertComponent},
  {path: 'manager/details', component:ManagerHospitalDetailsComponent},
  {path: 'manager/history', component:ManagerHospitalHistoryComponent},
  {path: 'manager/orPortfolio', component:ManagerHospitalOrPortfolioComponent},
  {path: 'manager/searchTechi', component:ManagerHospitalSearchTechiComponent},

  {path: 'admin', component:AdminHospitalComponent},
  {path: 'admin/device', component:AdminHospitalDeviceComponent},
  {path: 'admin/manageUser', component:AdminHospitalManageUserComponent},
  
  {path:'admin/dashboard', component:HospitalDashBoardComponent},
  {path: 'manager/dashboard', component:HospitalDashBoardComponent},
  {path: '**', component:AdminHospitalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [
  AdminHospitalComponent, 
  AdminHospitalDeviceComponent,
  AdminHospitalManageUserComponent,

  TechiHospitalComponent,   
  TechiHospitalDetailsComponent,
  TechiHospitalHistoryComponent,
  TechiHospitalEmergencyComponent,
  TechiHospitalOrComponent,

  ManagerHospitalComponent,
  ManagerHospitalAlertComponent,
  ManagerHospitalDetailsComponent,
  ManagerHospitalHistoryComponent,
  ManagerHospitalOrPortfolioComponent,
  ManagerHospitalSearchTechiComponent,

  HospitalDashBoardComponent
]