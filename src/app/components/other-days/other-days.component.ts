import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-other-days',
  templateUrl: './other-days.component.html',
  styleUrls: ['./other-days.component.css']
})
export class OtherDaysComponent implements OnInit {

  private weather: any;
  // params;
  // params = {
  //   q: "Hebron,PS",
  //   units: "metric",
  //   appid : environment.API_key
  // };
  
  constructor(private weatherService: WeatherService, private router:Router) { }
  
  @Input() readingIndex: number;
  ngOnInit() {
    let params = this.weatherService.getParams();
    this.weatherService.getWeather(params)
    .subscribe(data => {
      this.weather = data
    });

    this.weatherService.setParams(params);
    console.log("parasms are " , params);
  }

}
