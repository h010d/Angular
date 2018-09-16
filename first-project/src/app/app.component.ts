import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-project';

  private stringLengthCounter: number;

  private getSomeString(): any {
    return 1234567;
    // return 'Some string';
  }

  private countStringLength() {
    // this.stringLengthCounter = (this.getSomeString() as string).length;
    this.stringLengthCounter = (<string> this.getSomeString()).length;
    console.log('this.stringLengthCounter:', this.stringLengthCounter);
  }

  constructor() {
    this.countStringLength();
  }
}
