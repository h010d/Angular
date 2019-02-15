import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.scss'],
  // encapsulation: ViewEncapsulation.Native
  // encapsulation: ViewEncapsulation.Emulated
  encapsulation: ViewEncapsulation.None
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class SecondChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
