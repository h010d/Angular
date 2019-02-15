import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';
import { DataSharedService } from './services/data-shared.service';

@NgModule({
  imports: [CommonModule],
  exports: [AlertComponent],
  declarations: [AlertComponent],
  providers: [DataSharedService]
})
export class SharedAppModule {}
