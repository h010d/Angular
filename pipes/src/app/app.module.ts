import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PipesExampleComponent } from './components/pipes-example/pipes-example.component';
import { PolitePipe } from './polite.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipesExampleComponent,
    PolitePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
