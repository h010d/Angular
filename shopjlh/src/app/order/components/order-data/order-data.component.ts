import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-order-data',
  templateUrl: './order-data.component.html',
  styleUrls: ['./order-data.component.scss']
})
export class OrderDataComponent implements OnDestroy {
  private currentId;

  constructor(private activatedRoute: ActivatedRoute) {
    this.subscribeForRouteParams();
    console.log('I\'am constructor');
  }


  public ngOnDestroy() {
    alert(`Destroy id: ${this.currentId}`);
  }

  private subscribeForRouteParams() {
    this.activatedRoute.params.subscribe((param: any) => {
      this.currentId = param['id'];
    });
  }
}
