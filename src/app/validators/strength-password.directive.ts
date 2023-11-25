import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[strengthPassword]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: strengthPasswordValidatorDirective,
      multi: true,
    },
  ],
})
export class strengthPasswordValidatorDirective implements Validator {
  @Input('appStrengthPassword') minLength: number = 8;

  validate(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value || '';
    if (value) {
      const isValid = value.length >= this.minLength;

      return isValid ? null : { strengthPassword: { value } };
    } else {
      return null;
    }
  }
}
