import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  public forecast = [];
  public showSearchBar = false;
  automaticClose = false;
  public extras = [];
  city = '';

  constructor(private weatherService: WeatherService) {
    this.city = JSON.parse(localStorage.getItem('city'));
   }

  ngOnInit(): void {
    this.weatherService.getForecast().subscribe(result => {
      this.forecast = result['list'];
      // this.forecast[0].open = true;
      console.log(this.forecast);
    });
  }

  toggleSection(index) {
    this.forecast[index].open = !this.forecast[index].open;
  }

  save(w: any): void {
    // console.log(w);
    let weather = {
      date: w.dt_txt,
      temp: w.main.temp,
      main: w.weather[0].main,
      desc: w.weather[0].description,
      icon: w.weather[0].icon,
      temp_max: w.main.temp_max,
      city: this.city
    }

    // let extras: NavigationExtras = {
    //   queryParams: {
    //     special: JSON.stringify(weather)
    //   }
    // };
    this.extras.push(weather);
    localStorage.setItem('fav', JSON.stringify(this.extras));

  };


}
