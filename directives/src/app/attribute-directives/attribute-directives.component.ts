import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.scss']
})
export class AttributeDirectivesComponent implements OnInit {
  public inputValue = '';
  public colorPickerCurrentValue = 'yellow';

  public secondInputValue = '';
  public secondInputStyles = {};

  public onSecondInputValueChange() {
    this.setSecondInputStyles();
  }

  private setSecondInputStyles() {
    if (this.secondInputValue.length <= 5) {
      this.secondInputStyles = {
        'font-weight': 'normal',
        'color': 'black'
      };
    } else if (this.secondInputValue.length > 5 && this.secondInputValue.length <= 10) {
      this.secondInputStyles = {
        'font-weight': 'bold',
        'color': 'blue',
        'font-size': '16px'
      };
    } else {
      this.secondInputStyles = {
        'color': 'red',
        'font-size': '24px'
      };
    }
  }

  public isTextValid() {
    return this.inputValue.length < 10;  // return boolean
  }

  ngOnInit() {
  }

}
