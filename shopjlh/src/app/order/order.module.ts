import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { OrderListComponent } from './components/order-list/order-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OrderComponent, OrderListComponent]
})
export class OrderModule { }
