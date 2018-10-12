import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-third-child',
  templateUrl: './third-child.component.html',
  styleUrls: ['./third-child.component.scss'],
  // encapsulation: ViewEncapsulation.Native
  encapsulation: ViewEncapsulation.Emulated
  // encapsulation: ViewEncapsulation.None
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class ThirdChildComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
