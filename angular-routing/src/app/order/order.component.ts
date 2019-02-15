import { Component, OnInit } from '@angular/core';
// import {DataSharedService} from '../shared-app/services/data-shared.service';
import {DataCoreService} from '../core/services/data-core.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private dataCoreServise: DataCoreService) {
    console.log('Pushed to shared');
    this.dataCoreServise.pushElementToArray(100);
    console.log(this.dataCoreServise.getArray());
  }

  ngOnInit() {
  }

}
