import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedAppModule} from '../shared-app/shared-app.module';
import {AboutComponent} from './components/about/about.component';
import {HomeComponent} from './components/home/home.component';
import {NotFoundPageComponent} from './components/not-found-page/not-found-page.component';
import {FormsModule} from '@angular/forms';
import {LoggerService} from './services/logger.service';
import {HttpClientModule} from '@angular/common/http';
import {DataCoreService} from './services/data-core.service';

@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedAppModule,
    HttpClientModule

  ],
  exports: [
    AboutComponent,
    HomeComponent,
    NotFoundPageComponent
  ],
  // providers: [ // LoggerService,   // DataCoreService  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
