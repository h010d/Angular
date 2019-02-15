import { Component } from '@angular/core';


// @Component({
//   selector: 'app-car',
//   template: `
//   <h2>Single Car</h2>
//     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, inventore.</p>
//   `,
//   // styleUrls: ['./car.component.css']
//   styles: [`
//   h2{
//     color: aqua;
//     }
//   `]
// })
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {

  carName = 'Ford';
  carYear = 2017;

  getName(){
    return this.carName;
  }


}
