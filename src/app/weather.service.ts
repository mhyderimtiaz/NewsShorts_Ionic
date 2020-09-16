import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
const WAPI_URL=environment.weatherurl;
const WAPI_KEY=environment.weathertoken;
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getWeather(url){
    return this.http.get(`${WAPI_URL}=${url}&appid=${WAPI_KEY}`);
  }
  
}
