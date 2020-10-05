import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-manager-hospital',
  templateUrl: './manager-hospital.component.html',
  styleUrls: ['./manager-hospital.component.css']
})
export class ManagerHospitalComponent implements OnInit {

  OrPortfolio = "orPortfolio";
  SearchTechi = "searchTechi";
  History = "history";
  Details = "details";
  Alert = "alert";
  Dashboard = "dashboard";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSelect(pathVar:string){
    
    this.router.navigate(['/manager', pathVar]);

  }

}
