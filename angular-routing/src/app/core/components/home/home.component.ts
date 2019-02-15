import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoggerService} from '../../services/logger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public ttt = MyEnum;

  public orderId: number;

  constructor(private router: Router,
              private loggerService: LoggerService) {
    this.loggerService.logComponentCreatgion('Home Component');
  }

  ngOnInit() {
  }

  public navigateToOrder() {
    // console.log(this.orderId);
    this.router.navigate(['order-data', this.orderId]);
    // console.log(this.ttt.myEnumValue);
    // console.log(this.ttt.myEnumTwoValue);
  }

  public navigateToAbout() {
    this.router.navigate(['about'], {queryParams: {'customQuery': 6456, 'secondQueryParams': 200}});
  }


}

enum MyEnum {
  myEnumValue = '+', myEnumTwoValue = '/'
}

