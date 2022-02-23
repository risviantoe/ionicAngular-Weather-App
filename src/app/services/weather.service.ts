import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url  = 'http://api.openweathermap.org/data/2.5/';
  key  = 'fe61b1572b3a86baa95c12410da4f340';
  city = '';

  constructor(private http: HttpClient) {
    this.city = JSON.parse(localStorage.getItem('city'));
   }

  getData() {
    return this.http.get<any>(`${this.url}weather?q=${this.city}&appid=${this.key}&units=metric`);
  }

  getForecast() {
    return this.http.get(`${this.url}forecast?q=${this.city}&appid=${this.key}&units=metric`)
  }
}
