import {Component, OnInit} from '@angular/core';
import {ColorsService} from '../../colors.service';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {

  public colors = [];

  constructor(private colorsComponent: ColorsService) {
  }

  ngOnInit() {
    this.colors = this.colorsComponent.colors;
  }

}
