import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './core/components/home/home.component';
import {AboutComponent} from './core/components/about/about.component';
// import {OrderDataComponent} from './order/components/order-data/order-data.component';
import {NgModule} from '@angular/core';
import {NotFoundPageComponent} from './core/components/not-found-page/not-found-page.component';


// const routes: Routes = [
//   {path: '', component: HomeComponent},
//   {path: 'about', component: AboutComponent},
//   {path: 'order-data/:id', component: OrderDataComponent},
//   {path: 'order-data', redirectTo: 'order-data/1'},
//   {path: 'not-found-page', component: NotFoundPageComponent},
//
//   {path: '**', redirectTo: '/not-found-page'}
// ];

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'order', loadChildren: 'app/order/order.module#OrderModule'},
  {path: 'user/:id', loadChildren: 'app/user/user.module#UserModule'},
  {path: 'not-found-page', component: NotFoundPageComponent},
  {path: '**', redirectTo: '/not-found-page'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule {

}

