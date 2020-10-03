import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-hospital',
  templateUrl: './admin-hospital.component.html',
  styleUrls: ['./admin-hospital.component.css']
})
export class AdminHospitalComponent implements OnInit {

  name = "admin";// use user id here
  constructor() { }

  ngOnInit(): void {
  }

}
