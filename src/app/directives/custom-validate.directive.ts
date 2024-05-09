import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appCustomValidate]',
  providers: [ {
    provide: NG_VALIDATORS,
    useExisting: CustomValidateDirective,
    multi: true
  }]
})
export class CustomValidateDirective implements Validator{
  @Input('appCustomValidate') requiredPattern!: string;

  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    if (control.value) {
      const pattern = new RegExp(this.requiredPattern);
      const isValid = pattern.test(control.value);

      if (!isValid) {
        return { passwordPattern: true };
      }
    }
    return null;
  }

}
