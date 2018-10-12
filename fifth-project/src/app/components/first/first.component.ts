import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {
  public displayText = '';
  public firstOperand: number;
  public firstOperandBlock: boolean;
  public secondOperand: number;
  public tmpOperand = '';
  public operator: string;


  public getButtonValue(value: number | string) {


    if (value !== 'c' && value !== 'del') {
      if (typeof value === 'number') {
        this.displayText += value.toString();
        if (this.firstOperandBlock) {
          this.tmpOperand += value.toString();
        }
      } else if (typeof value === 'string' && !this.firstOperandBlock) {
        this.firstOperand = parseFloat(this.displayText);
        this.displayText += value;
        this.operator = value.toString();
        this.firstOperandBlock = true;
      }
      else if (typeof value === 'string' && this.firstOperandBlock) {
        this.secondOperand = parseFloat(this.tmpOperand);
        this.operation();
      }
    }
    this.displayTextEdit(value);
  }

  public unblockOperand() {
    this.firstOperand = parseFloat(this.displayText);
    this.secondOperand = 0;
    this.operator = '';
  }

  public displayTextEdit(value){
    switch (value) {
      case 'c':
        this.displayText = '';
        this.firstOperand = 0;
        this.firstOperandBlock = false;
        this.secondOperand = 0;
        this.tmpOperand = '';
        // console.log('this.firstOperand', this.firstOperand, typeof this.firstOperand);
        // console.log('this.firstOperandBlock', this.firstOperandBlock, typeof this.firstOperandBlock);
        // console.log('this.secondOperand', this.secondOperand, typeof this.secondOperand);
        // console.log('this.tmpOperand ', this.tmpOperand, typeof this.tmpOperand);
        break;
      case 'del':
        this.displayText = this.displayText.substr(0, this.displayText.length - 1);
        break;
      default:
        break;

    }
  }
  public operation() {
    switch (this.operator) {
      case '+':
        this.displayText = (this.firstOperand + this.secondOperand).toString();
        this.unblockOperand();
        break;
      case '-':
        this.displayText = (this.firstOperand - this.secondOperand).toString();
        this.unblockOperand();
        break;
      case '*':
        this.displayText = (this.firstOperand * this.secondOperand).toString();
        this.unblockOperand();
        break;
      case '/':
        this.displayText = (this.firstOperand / this.secondOperand).toString();
        this.unblockOperand();
        break;
      default:
        console.error('Оператор this.operator не распознан!: ', this.operator);

    }
  }

}
