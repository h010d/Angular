import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.scss'],
  encapsulation: ViewEncapsulation.Native
  // encapsulation: ViewEncapsulation.Emulated
  // encapsulation: ViewEncapsulation.None
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class FirstChildComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}

