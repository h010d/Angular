import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {
  title = 'my first-project test';


  public receivedData: string;
  public childHeaderText: string;
  public receivedSecondData: string;



  public numArray = [1, 9, 3, 7, 15, 65, 2, 13, 8];
  private stringLengthCounter: number;

  constructor() {
    this.countStringLength();
    this.sortMyArray(this.numArray);
  }

  public sortMyArray(myArray: number[]): number[] {
    const myNewArray: number[] = [];
    for (let i = 0; i < myArray.length; i++) {
      let min = myArray[i];
      let minIndex = i;
      for (let j = i + 1; j < myArray.length; j++) {
        if (myArray[j] < min) {
          min = myArray[j];
          minIndex = j;

        }

      }
      if (i !== minIndex) {
        const tmp = myArray[i];
        myArray[i] = myArray[minIndex];
        myArray[minIndex] = tmp;
      }
    }
    console.log(myArray);
    return myNewArray;
  }

  private getSomeString(): any {
    return 1234567;
    // return 'Some string';
  }

  private countStringLength() {
    // this.stringLengthCounter = (this.getSomeString() as string).length;
    this.stringLengthCounter = (<string> this.getSomeString()).length;
    console.log('this.stringLengthCounter:', this.stringLengthCounter);
  }


//   public sortMyArray(): void {
//     console.log('hi');
//   }
  public receiveData(myEvent) {
    this.receivedData = myEvent;
	}

}

