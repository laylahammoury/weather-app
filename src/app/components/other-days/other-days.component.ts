import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-other-days',
  templateUrl: './other-days.component.html',
  styleUrls: ['./other-days.component.css']
})
export class OtherDaysComponent implements OnInit {

  private weather: any;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeather()
    .subscribe(data=> {this.weather = data});
  }

}
