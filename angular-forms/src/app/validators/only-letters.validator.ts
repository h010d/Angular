import {FormControl, ValidationErrors} from '@angular/forms';

export function onlyLetters(control: FormControl): ValidationErrors {
  const field = control.value;
  const onlyLetterRegexp = '^[a-zA-Z]+$';

  const regexp = new RegExp(onlyLetterRegexp);

  // if (regexp.test(field)) {
  //   return null;
  // } else {
  //   return {onlyLetters: true};
  // }
  return regexp.test(field) ? null : {onlyLetters: true};
}

