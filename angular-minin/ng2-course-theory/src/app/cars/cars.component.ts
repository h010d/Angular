import {Component} from '@angular/core';

@Component({
  // selector: '[app-cars]', // атрибут
  // selector: '.app-cars',  // class
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  // canAddCar = false;
  addCarStatus = '';
  inputTextOne = '';
  inputTextTwo = '';
  inputTextThree = '';
  inputTextFour = '';

  inputTextFive = '';
  carNameTwo = '';
  carNameThree = '';
  addCarStatusTwo = false;
  addCarStatusThree = false;
  cars = ['Ford', 'Audi', 'BMW', 'Mazda', 'Lada', 'Bently'];
  items = [{id: 3, name: 'item 1'}, {id: 6, name: 'item 2'}, {id: 9, name: 'item 3'}];
  dates = [
    new Date(2015, 3, 4),
    new Date(2011, 2, 5),
    new Date(2017, 4, 6),
    new Date(2000, 1, 7)
  ];
  datesTwo = [
    new Date(2015, 3, 4).toString(),
    new Date(2011, 2, 5).toString(),
    new Date(2017, 4, 6).toString(),
    new Date(2000, 1, 7).toString()
  ];


  constructor() {
    // setTimeout(() => {
    //      this.canAddCar = true;
    // }, 4000);


  }

  addCar() {
    this.addCarStatus = 'Машина добавлена!';
  }

  onKeyUpOne(event: Event) {
    // console.log(event);
    this.inputTextOne = (<HTMLInputElement>event.target).value;
  }

  onKeyUpTwo(value) {
    this.inputTextTwo = value;
  }

  onKeyUpThree(event) {
    // console.log(event);
    if (event.code === 'Enter') {
      this.inputTextThree = event.target.value;
    }
  }

  onKeyUpFour(event) {
    // console.log(event);

    this.inputTextFour = event.target.value;

  }

  onKeyUpFive(event) {
    // console.log(event);

    this.inputTextFive = event.target.value;

  }

  addCarTwo() {
    this.addCarStatusTwo = true;
  }

  addCarThree() {
    this.addCarStatusThree = true;
    this.cars.push(this.carNameThree);
    this.carNameThree = '';
  }

  setBigCarText(car: string) {
    return car.length > 4 ? true : false;
  }
}
