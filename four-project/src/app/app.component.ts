import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
  // encapsulation: ViewEncapsulation.Emulated
  // encapsulation: ViewEncapsulation.None
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  public childHeaderText: string;
  public receivedData: string;
  public receivedSecondData: string;
  public isCustomPropertyBindingActive: boolean;

  public receiveData(data: string): void {
    this.receivedData = data;
  }
}

