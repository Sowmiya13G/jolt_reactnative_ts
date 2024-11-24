import {ERROR_HANDLER_TEXT} from '../constant/strings';

interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function emailValidation(
  data: string | undefined,
  formatOnly: boolean = false,
  errorText: string = '',
): ValidationResult {
  const errors: Record<string, string> = {};
  let isValid = true;

  if (!data) {
    if (!formatOnly) {
      isValid = false;
      errors['email'] = errorText || ERROR_HANDLER_TEXT.pleaseEnterEmail;
    }
  } else {
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!pattern.test(data)) {
      isValid = false;
      errors['email'] = ERROR_HANDLER_TEXT.pleaseEnterValidEmail;
    }
  }

  return {isValid, errors};
}

export function mobileNumberValidation(
  mobile: string | undefined,
): ValidationResult {
  const errors: Record<string, string> = {};
  let isValid = true;

  if (!mobile) {
    isValid = false;
    errors['mobile'] = ERROR_HANDLER_TEXT.pleaseEnterMobileNo;
  } else {
    const pattern = /^[6-9]{1}[0-9]{9}$/;
    if (!pattern.test(mobile)) {
      isValid = false;
      errors['mobile'] = ERROR_HANDLER_TEXT.pleaseEnterValidMobileNo;
    }
  }

  return {isValid, errors};
}

export function passwordValidation(
  password: string | undefined,
): ValidationResult {
  const errors: Record<string, string> = {};
  let isValid = true;

  if (!password) {
    isValid = false;
    errors['password'] = ERROR_HANDLER_TEXT.enterPassword;
  } else {
    const pattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/;
    if (!pattern.test(password)) {
      isValid = false;
      errors['password'] = ERROR_HANDLER_TEXT.enterValidPassword;
    }
  }

  return {isValid, errors};
}
