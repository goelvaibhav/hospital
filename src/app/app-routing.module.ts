import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHospitalComponent } from './admin-hospital/admin-hospital.component';
import { ManagerHospitalComponent } from './manager-hospital/manager-hospital.component';
import { TechiHospitalComponent } from './techi-hospital/techi-hospital.component';


const routes: Routes = [
  {path: 'admin', component:AdminHospitalComponent},
  {path:'techi', component:TechiHospitalComponent},
  {path:'manager', component:ManagerHospitalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [AdminHospitalComponent, TechiHospitalComponent, ManagerHospitalComponent]