import { Component, OnInit } from '@angular/core';
import cities from 'src/assets/data/city.list.min.json'
import { environment } from 'src/environments/environment'
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})

export class SearchResultComponent implements OnInit {
  cityList = cities;
  citySearch ="";
 
  constructor( private weatherService: WeatherService) { }

  ngOnInit() {
  }
  cityFilter( cityName, cityCountry: string){
    let params = {
      q: "" + cityName + "," + cityCountry,
      units: "metric",
      appid : environment.API_key
    };
    this.weatherService.setParams(params);
  }
}
