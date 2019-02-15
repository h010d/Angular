import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TemplateDrivenApproachComponent} from './components/template-driven-approach/template-driven-approach.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataDrivenApproachComponent} from './components/data-driven-approach/data-driven-approach.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenApproachComponent,
    DataDrivenApproachComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
