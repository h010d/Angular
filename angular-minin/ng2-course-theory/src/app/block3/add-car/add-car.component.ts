import {Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  carName = '';
  // carYear = 2017;
  @Output('onAddCar') carEmitter = new EventEmitter<{ name: string, year: number }>();

  @ViewChild('carYearInput') carYearInput: ElementRef;
  constructor() {
  }

  ngOnInit() {
  }


  // addCarTh(carNameEl: HTMLInputElement) {
  //   console.log(carNameEl);
  //   console.log(carNameEl.value);
  //   this.carEmitter.emit({
  //     name: carNameEl.value,
  //     year: this.carYear
  //   });
  //   carNameEl.value = '';
  //   this.carYear = 2017;
  // }
  addCarTh(carNameEl: HTMLInputElement) {
    console.log('this.carYearInput: ', this.carYearInput);
    console.log('this.carYearInput.nativeElement.value: ', this.carYearInput.nativeElement.value);
    console.log(carNameEl);
    console.log(carNameEl.value);
    this.carEmitter.emit({
      name: carNameEl.value,
      year: +this.carYearInput.nativeElement.value
    });
    carNameEl.value = '';
    this.carYearInput.nativeElement.value = 2017;
  }
}
