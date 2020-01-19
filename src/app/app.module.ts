import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrentDayComponent } from './components/current-day/current-day.component';
import { OtherDaysComponent } from './components/other-days/other-days.component';
import { HomeComponent } from './pages/home/home.component';
import { WeatherDetailsComponent } from './pages/weather-details/weather-details.component';
import { WeatherService } from './services/weather.service';


@NgModule({
  declarations: [
    AppComponent,
    CurrentDayComponent,
    OtherDaysComponent,
    HomeComponent,
    WeatherDetailsComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
