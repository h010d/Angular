import {RouterModule, Routes} from '@angular/router';
import {OrderComponent} from './order.component';
import {OrderListComponent} from './components/order-list/order-list.component';
import {OrderDataComponent} from './components/order-data/order-data.component';
import {NgModule} from '@angular/core';


const ORDER_ROUTES: Routes = [
  {
    path: '', component: OrderComponent, children: [
      {path: '', redirectTo: 'list'},
      {path: 'list', component: OrderListComponent},
      {path: 'data/:id', component: OrderDataComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ORDER_ROUTES)],
  exports: [RouterModule]
})

export class OrderRoutingModule {

}
