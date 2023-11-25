import { AbstractControl, ValidatorFn } from '@angular/forms';

export function strengthPassword(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {

    const value: string = control.value || '';

    if (value) {
      const isValid = value.length >= 8;

      return isValid ? null : { strengthPassword: { value } };
    } else {
      return null;
    }
  };
}
