import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-planets',
  templateUrl: './planets.page.html',
  styleUrls: ['./planets.page.scss'],
})
export class PlanetsPage implements OnInit {

  planets: Observable<any>;
 
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.planets = this.http.get('https://swapi.dev/api/planets');
  }
 
  openDetails(planets) {
    let split = planets.url.split('/');
    let planetsID = split[split.length-2];
    this.router.navigateByUrl(`/tabs/planets/${planetsID}`);
  }

}