import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyCustomComponent } from './my-custom/my-custom.component';
import { MyCustomtwoComponent } from './my-customtwo/my-customtwo.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCustomComponent,
    MyCustomtwoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
