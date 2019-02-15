import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderComponent} from './order.component';
import {OrderListComponent} from './components/order-list/order-list.component';
import {SharedAppModule} from '../shared-app/shared-app.module';
import {OrderRoutingModule} from './order.routing';
import {OrderDataComponent} from './components/order-data/order-data.component';

@NgModule({
  imports: [
    CommonModule,
    SharedAppModule,
    // CoreModule,
    OrderRoutingModule
  ],
  declarations: [OrderComponent, OrderListComponent, OrderDataComponent]
})
export class OrderModule {
}
