import { Component, OnInit } from '@angular/core';
import cities from 'src/data/city.list.min.json'
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
  // cityCountry;
 
  constructor( private weatherService: WeatherService) { }

  ngOnInit() {
  }
  cityFilter( cityName, cityCountry: string){
    console.log("City is: " + cityName)
    console.log("Country is: " + cityCountry)
    let params = {
      q: "" + cityName + "," + cityCountry,
      units: "metric",
      appid : environment.API_key
    };
    this.weatherService.setParams(params);
    console.log("parasms are " , params);
  }
}
