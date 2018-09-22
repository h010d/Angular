import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyCustomComponent } from './my-custom/my-custom.component';
import { MyCustomtwoComponent } from './my-customtwo/my-customtwo.component';
import { MyThreeComponentComponent } from './my-three-component/my-three-component.component';
import { MyFreeComponentComponent } from './my-free-component/my-free-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCustomComponent,
    MyCustomtwoComponent,
    MyThreeComponentComponent,
    MyFreeComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
