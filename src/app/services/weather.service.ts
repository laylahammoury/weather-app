import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IWeather } from '../weather';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url = environment.url; 
  params;
  
  constructor(private http: HttpClient) { }

  getWeather(currentParams): Observable <any>{
    return this.http.get<any>(this.url, {params: currentParams})
  }
  getParams(): any{
    return this.params;
  }

  setParams(par: any){
    this.params = par;
  }
}
