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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CityFilterPipe } from './pipes/city-filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CurrentDayComponent,
    OtherDaysComponent,
    HomeComponent,
    WeatherDetailsComponent,
    routingComponents,
    CityFilterPipe,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
