import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {CarsComponent} from './cars/cars.component';
import {CarComponent} from './car/car.component';
import { CarsThreeComponent } from './block3/cars-three/cars-three.component';
import { CarThreeComponent } from './block3/car-three/car-three.component';
import { AddCarComponent } from './block3/add-car/add-car.component';


@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    CarsThreeComponent,
    CarThreeComponent,
    AddCarComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
