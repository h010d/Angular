import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'polite'
})
export class PolitePipe implements PipeTransform {

  public transform(value: any, isGreeting: boolean): any {
    return isGreeting ? `Hi ${value} !` : `Bye, ${value} !`;
  }

}

