import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyCustomComponent } from './components/my-custom/my-custom.component';
import { MyCustomtwoComponent } from './components/my-customtwo/my-customtwo.component';
import { MyThreeComponentComponent } from './components/my-three-component/my-three-component.component';
import { MyFreeComponentComponent } from './components/my-free-component/my-free-component.component';
import { MyCompTwoLessonComponent } from './components/my-comp-two-lesson/my-comp-two-lesson.component';
import { HmwTwoComponent } from './components/Homeworks/hmw-two/hmw-two.component';
import { TestCheckBoxComponent } from './components/Homeworks/test-check-box/test-check-box.component';
import { DataBindingComponent } from './components/threelesson/data-binding/data-binding.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [

    AppComponent,
    MyCustomComponent,
    MyCustomtwoComponent,
    MyThreeComponentComponent,
    MyFreeComponentComponent,
    MyCompTwoLessonComponent,
    HmwTwoComponent,
    TestCheckBoxComponent,
    DataBindingComponent

  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
