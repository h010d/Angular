import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-cars-three',
  templateUrl: './cars-three.component.html',
  styleUrls: ['./cars-three.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CarsThreeComponent {

  carsth: { name: string, year: number } [] = [{
    name: 'Ford',
    year: 2015
  }
  // , {
  //   name: 'Mazda',
  //   year: 2010
  // }, {
  //   name: 'Audi',
  //   year: 2017
  // }
    ];

  constructor() {
  }

  updateCarList(car: { name: string, year: number }) {
    this.carsth.push(car);
  }

  changeCarName(){
    this.carsth[0].name = 'New car name!';
  }
  deleteCar(){
    this.carsth.splice(0, 1);
    console.log(this.carsth);
  }

}
