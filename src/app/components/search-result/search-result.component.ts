import { Component, OnInit } from '@angular/core';
import cities from 'src/assets/data/city.list.min.json'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  cityList = cities;
  constructor() { }

  ngOnInit() {
    console.log(this.cityList)
  }

}
