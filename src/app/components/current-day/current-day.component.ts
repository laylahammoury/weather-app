import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-current-day',
  templateUrl: './current-day.component.html',
  styleUrls: ['./current-day.component.css']
})
export class CurrentDayComponent implements OnInit {

 private weather: any;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeather()
    .subscribe(data => {this.weather = data});
  }

}
