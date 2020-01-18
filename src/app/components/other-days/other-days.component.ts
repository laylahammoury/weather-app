import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-other-days',
  templateUrl: './other-days.component.html',
  styleUrls: ['./other-days.component.css']
})
export class OtherDaysComponent implements OnInit {

  private weather: any;
  params = {
    q: "Hebron,PS",
    units: "metric",
    appid : environment.API_key
  };
  
  constructor(private weatherService: WeatherService) { }
  
  @Input() readingIndex: number;
  ngOnInit() {
    console.log(this.params)
    this.weatherService.getWeather(this.params)
    .subscribe(data=> {this.weather = data});
  }

}
