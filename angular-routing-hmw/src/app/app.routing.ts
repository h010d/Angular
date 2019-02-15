import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ColorsComponent} from './components/colors/colors.component';
import {AboutComponent} from './components/about/about.component';
import {NgModule} from '@angular/core';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {ForgotPassPageComponent} from './components/forgot-pass-page/forgot-pass-page.component';
import {ColorPageComponent} from './components/color-page/color-page.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {AuthGuard} from './auth-guard.service';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'colors', component: ColorsComponent, canActivate: [AuthGuard],
    children: [{path: ':id/:name', component: ColorPageComponent}]
  },
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'forgot-pass', component: ForgotPassPageComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})


export class AppRouting {
}
 
