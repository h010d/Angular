import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  @Input() public someComponentText: string;
  @Input() public someComponentTextTwo: string;
  @Output() public passDataToParent = new EventEmitter<string>();

  public enteredData: string;

  constructor() {
  }

  ngOnInit() {
  }

  public passData() {
    this.passDataToParent.emit(this.enteredData);
  }
}
