import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FirstComponent} from './components/first/first.component';
import {FormsModule} from '@angular/forms';
import {FormOrderComponent} from './components/form-order/form-order.component';
import {FourLessonComponent} from './components/four-lesson/four-lesson.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PasswordModule} from 'primeng/password';
import {SelectButtonModule} from 'primeng/selectbutton';
import {PaginatorModule} from 'primeng/paginator';
import {AccordionModule} from 'primeng/accordion';
import {SplitButtonModule} from 'primeng/splitbutton';
import {ButtonModule} from 'primeng/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule, MatOptionModule, MatSelectModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    FormOrderComponent,
    FourLessonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    PasswordModule,
    SelectButtonModule,
    PaginatorModule,
    AccordionModule,
    SplitButtonModule,
    ButtonModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
