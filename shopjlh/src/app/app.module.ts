import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AboutComponent} from './components/about/about.component';
import {HomeComponent} from './components/home/home.component';
import {OrderDataComponent} from './order/components/order-data/order-data.component';
import {AppRoutingModule} from './app.routing';
import {FormsModule} from '@angular/forms';
import {NotFoundPageComponent} from './components/not-found-page/not-found-page.component';
import { SliderComponent } from './components/slider/slider.component';
import { HeaderComponent } from './components/header/header.component';
import { SpecialsComponent } from './components/specials/specials.component';
import { BestSellersComponent } from './components/best-sellers/best-sellers.component';
import { MonthDealsComponent } from './components/month-deals/month-deals.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    OrderDataComponent,
    NotFoundPageComponent,
    SliderComponent,
    HeaderComponent,
    SpecialsComponent,
    BestSellersComponent,
    MonthDealsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
