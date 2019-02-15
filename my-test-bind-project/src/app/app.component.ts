import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>Выбранное имя: {{ name }}</div>
    <app-child [(userName)]="name"></app-child>
  `
})
export class AppComponent {
  public name = 'Tom';
}
