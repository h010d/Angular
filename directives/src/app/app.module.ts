import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import {FormsModule} from '@angular/forms';
import { CustomAttributeDirective } from './directives/custom-attribute.directive';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { CustomStructureDirective } from './custom-structure.directive';

@NgModule({
  declarations: [
    AppComponent,
    AttributeDirectivesComponent,
    CustomAttributeDirective,
    StructuralDirectivesComponent,
    CustomStructureDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
