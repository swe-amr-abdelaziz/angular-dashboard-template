import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  static required(control: AbstractControl): ValidationErrors | null {
    const requiredError = { required: true };
    const { value } = control;

    if (value === null || value === undefined) {
      return requiredError;
    }

    if (typeof value === 'string') {
      if (!value || value.trim() === '') {
        return requiredError;
      }
    }

    if (typeof value === 'number') {
      if ((!value && value !== 0) || isNaN(value)) {
        return requiredError;
      }
    }

    if (value instanceof Array) {
      if (value.length === 0) {
        return requiredError;
      }
    }

    return null;
  }
}
