import { Component, OnInit } from '@angular/core';
import {LoggerService} from '../core/services/logger.service';
// import {DataSharedService} from '../shared-app/services/data-shared.service';
import {DataCoreService} from '../core/services/data-core.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private loggerService: LoggerService,
              private dataCoreService: DataCoreService) {
    console.log(this.dataCoreService.getArray());
  }

  ngOnInit() {
  }

}
