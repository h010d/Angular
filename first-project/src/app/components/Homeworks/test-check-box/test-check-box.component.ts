import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-test-check-box',
  templateUrl: './test-check-box.component.html',
  styleUrls: ['./test-check-box.component.scss']
})
export class TestCheckBoxComponent implements OnInit {
  @ViewChild('form') form: NgForm;

  answers = [
    {
      type: 'yes',
      text: 'Да'
    }
    , {
      type: 'no',
      text: 'Нет'
    }
  ];
  defaultAnswer = 'no';
  defaultCountry = 'ru';
  formData = {};
  isSubmited = false;

  constructor() {
  }

  ngOnInit() {

  }

  addRandEmail() {
    const randEmail = 'wfm@gmail.com';
    // this.form.setValue({
    //   user: {
    //     pass: '',
    //     email: randEmail
    //   }
    //   ,
    //   country: '',
    //   answer: ''
    // });
    this.form.form.patchValue({
      user: {email: randEmail}
    });
    console.log('this.randomInt(0, 78):', this.randomInt(0, 78));


  }

  /**
   * generate a random integer between min and max
   * @param {Number} min
   * @param {Number} max
   * @return {Number} random generated integer
   */
  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // submitForm(form: HTMLFormElement) {
  //   console.log('Submited!', form);
  // // }
  // submitForm(form: NgForm) {
  //   console.log('Submited!', form);
  // }
  submitForm() {
    this.isSubmited = true;
    console.log('Submited!', this.form);
    this.formData = this.form.value;
    this.form.reset();
    this.randomInt(0, 78);
  }

}
