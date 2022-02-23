import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  public weather = {};
  public temp = 0;
  public city = '';
  public showSearchBar = false;
  public hideIcon= false;
  public dataCity = '';

  constructor(private weatherService: WeatherService, private route: Router) { }

  ngOnInit(): void {
    this.weatherService.getData().subscribe(result => {
      this.weather = result;
      this.temp = result.main.temp;
      this.city = result.name;
      console.log(this.weather);
    });
  }

  clickedSearchIcon(event: Event) {
    this.showSearchBar = !this.showSearchBar;
  }


  searchCity(q: string) {
    this.dataCity = q;
    localStorage.setItem('city', JSON.stringify(this.dataCity));
  }





}

