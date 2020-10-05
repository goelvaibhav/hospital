import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-techi-hospital',
  templateUrl: './techi-hospital.component.html',
  styleUrls: ['./techi-hospital.component.css']
})
export class TechiHospitalComponent implements OnInit {

  // public colors = ["red", "blue", "green", "yellow"];
   History = "history";
   Emergency = "emergency";
   Or = "or";
   Details = "details";
  //  pathVar = [
  //   {"id": "OR", "name":"OR"},
  //   {"id": "emergency", "name":"emergency"},
  //   {"id": "history", "name":"history"},
  //   {"id": "details", "name":"details"}
  // ]
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSelect(pathVar:string){
    this.router.navigate(['/techi', pathVar]);
  }
}
