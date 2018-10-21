import {Routes} from '@angular/router';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {UserEditInfoComponent} from './components/user-edit-info/user-edit-info.component';
import {UserOrdersComponent} from './components/user-orders/user-orders.component';


export const USER_CHILD_ROUTES: Routes = [
  {path: 'user-detail', component: UserDetailsComponent},
  {path: 'user-edit-info', component: UserEditInfoComponent},
  {path: 'user-orders', component: UserOrdersComponent}
];
