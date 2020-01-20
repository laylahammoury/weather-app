import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { WeatherService } from 'src/app/services/weather.service';
import { environment } from 'src/environments/environment'
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  readingIndex;
  weather: any;
  params = {};
  
  constructor( private route: ActivatedRoute, private weatherService: WeatherService) { }
  
  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.readingIndex = id;
    this.params = this.weatherService.getParams(); 
    
    this.weatherService.getWeather(this.params)
    .subscribe(data=> {this.weather = data});
  }

}
