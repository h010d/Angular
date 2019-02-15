import { Component  } from '@angular/core';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrderComponent{

  public firstName: string;
  public surName: string;
  public phoneNumber: string;
  public city: string;
  public deliveryAddress: string;
  public email: string;
  public comments: string;

   public getDataForm(){

     console.log('hi');
     console.log('this.firstName', this.firstName);
     console.log('this.surName', this.surName);
   }

  public passData() {
    // this.passDataToParent.emit(this.enteredData);

  }
}
