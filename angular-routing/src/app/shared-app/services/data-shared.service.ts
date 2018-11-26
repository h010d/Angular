import { Injectable } from '@angular/core';

@Injectable()
export class DataSharedService {

 private array = [1, 2, 3, 4, 5];

 public pushElementToArray(element: number){
   this.array.push(element);
  }

  public getArray(){
   return this.array;
  }

}
