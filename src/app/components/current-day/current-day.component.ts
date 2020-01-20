import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-current-day',
  templateUrl: './current-day.component.html',
  styleUrls: ['./current-day.component.css']
})
export class CurrentDayComponent implements OnInit {

 private weather: any;
//  params = {
//   q: "Hebron,PS",
//   units: "metric",
//   appid : environment.API_key,
// };
  readingIndex = 1;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    let params = this.weatherService.getParams();
    this.weatherService.getWeather(params)
    .subscribe(data => {this.weather = data});
  }

}
