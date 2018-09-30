import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() public someComponentText: string;
  @Output() public passDataToParent = new EventEmitter<string>();

  public enteredData: string;

  constructor() {
  }

  ngOnInit() {
  }

  public passData() {
    this.passDataToParent.emit(this.enteredData);
    console.log('passData()');
  }

}
