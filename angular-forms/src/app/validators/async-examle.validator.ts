import {FormControl, ValidationErrors} from '@angular/forms';

export function asyncExample(control: FormControl): Promise<ValidationErrors> {
  console.log('HI SERVER!');

  const promise = new Promise(resolve => {
    setTimeout(() => {
      if (control.value === 'Vlad') {
        resolve({
          asyncExample: true
        });
      } else {
        resolve(null);
      }
    }, 2000);
  });

  return promise;
}



