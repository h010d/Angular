import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ColorsComponent} from './components/colors/colors.component';
import {ColorsService} from './colors.service';
import {AppRouting} from './app.routing';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ForgotPassPageComponent } from './components/forgot-pass-page/forgot-pass-page.component';
import { ColorPageComponent } from './components/color-page/color-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth-guard.service';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ColorsComponent,
    LoginPageComponent,
    ForgotPassPageComponent,
    ColorPageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [ColorsService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
