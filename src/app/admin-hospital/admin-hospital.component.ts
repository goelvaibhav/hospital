import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-admin-hospital',
  templateUrl: './admin-hospital.component.html',
  styleUrls: ['./admin-hospital.component.css']
})
export class AdminHospitalComponent implements OnInit {

  Device = "device";
  ManageUser = "manageUser";
  Dashboard = "dashboard";
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSelect(pathVar:string){
    this.router.navigate(['/admin', pathVar]);
  }

}
