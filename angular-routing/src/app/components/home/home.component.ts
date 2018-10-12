import {Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public ttt = MyEnum;

  public orderId: number;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  public navigateToOrder() {
    console.log(this.orderId);
    this.router.navigate(['order-data', this.orderId]);
    console.log(this.ttt.myEnumValue);
    console.log(this.ttt.myEnumTwoValue);
  }




}

enum MyEnum {
  myEnumValue = '+', myEnumTwoValue = '/'
}

