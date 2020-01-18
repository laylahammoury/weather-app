import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IWeather } from '../weather';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url = environment.url; 
  constructor(private http: HttpClient) { }
  getWeather(): Observable <any>{
    console.log("the URL is:" + this.url);
    return this.http.get<any>(this.url)
    // return "Returnes successfully "
  }
}
