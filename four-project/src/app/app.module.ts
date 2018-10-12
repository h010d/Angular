import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { LifecycleHooksComponent } from './components/lifecycle-hooks/lifecycle-hooks.component';
import { FirstChildComponent } from './components/first-child/first-child.component';
import { SecondChildComponent } from './components/second-child/second-child.component';
import { ThirdChildComponent } from './components/third-child/third-child.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    LifecycleHooksComponent,
    FirstChildComponent,
    SecondChildComponent,
    ThirdChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
