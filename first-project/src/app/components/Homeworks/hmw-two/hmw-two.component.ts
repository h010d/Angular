import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-hmw-two',
  templateUrl: './hmw-two.component.html',
  styleUrls: ['./hmw-two.component.scss']
})
export class HmwTwoComponent {
  @ViewChild('form') form: NgForm;
  answers = [
    // переделать через Enum
    {
      type: 'asd',
      text: 'Возрастанию'
    }
    , {
      type: 'dec',
      text: 'Убыванию'
    }
  ];
  arraySort = [12, 6, 18, 3, 1, 0];
  newArr = [];

  public defaultType = 'bbl';
  // defaultAnswer = 'asd';
 public clearFld = '';
  formData = {};
  public isSubmited: boolean;


 public submitForm() {
    console.log('Submited!', this.form);
    this.execution();
  }

  private execution() {
    console.log('Hi execution!');
    this.getTextToNumber();
    if (this.form.value.type === 'bbl') {
      this.formData =  'Пузырьковая сортировка: ';
      this.sortArray();

    } else if (this.form.value.type === 'shl') {
      this.formData =  'Сортировка Shella: ';
      this.shellSort(this.newArr);
    }
    this.isSubmited = true;
    this.formData += this.newArr.toString();
    console.log(this.newArr);
  }

  public clearField(){
       this.clearFld = '';
    this.form.value.arr  = this.clearFld;
    this.newArr = [];
  }

  // addRandArray() {
  //   console.log('rand');
  //   for (let i = 0; i < 15; i++) {
  //     this.newArr.push(' ' + this.randomInt(1, 100));
  //   }
  //            // console.log(this.newArr);
  //   this.addArrRand = this.newArr;
  //   this.form.value.arr = this.addArrRand.toString();
  //      // console.log('this.form.value.arr:', this.form.value.arr);
  // }

  private getTextToNumber() {
    this.arraySort = this.form.value.arr.split(' ');
    for (let i = 0; i < this.arraySort.length - 1; i++) {
      this.newArr.push(+this.arraySort[i]);

    }
  }

  private shellSort(A) {
    const n = A.length;
    let i = Math.floor(n / 2);
    while (i > 0) {
      for (let j = 0; j < n; j++) {
        let k = j;
        const t = A[j];
        while (k >= i && A[k - i] > t) {
          A[k] = A[k - i];
          k -= i;
        }
        A[k] = t;
      }
      i = (i === 2) ? 1 : Math.floor(i * 5 / 11);
    }
    return A;
  }

  private sortArray() {
    console.log('I am a sortArray()');
    for (let i = 0; i < this.newArr.length; i++) {
      let min = this.newArr[i];
      let minIndex = i;
      for (let j = i + 1; j < this.newArr.length; j++) {
        if (this.newArr[j] < min) {
          min = this.newArr[j];
          minIndex = j;

        }

      }
      if (i !== minIndex) {
        const tmp = this.newArr[i];
        this.newArr[i] = this.newArr[minIndex];
        this.newArr[minIndex] = tmp;
      }
    }

  }

  private randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
