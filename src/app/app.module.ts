import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrentDayComponent } from './components/current-day/current-day.component';
import { OtherDaysComponent } from './components/other-days/other-days.component';
import { HomeComponent } from './pages/home/home.component';
import { WeatherService } from './services/weather.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CityFilterPipe } from './pipes/city-filter.pipe';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentDayComponent,
    OtherDaysComponent,
    HomeComponent,
    routingComponents,
    CityFilterPipe,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
