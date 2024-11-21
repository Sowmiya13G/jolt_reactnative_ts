import {ERROR_HANDLER_TEXT} from '../constant/strings';
import {emailValidation, mobileNumberValidation} from './codeSnippets';

interface RegisterFormData {
  firstName?: string;
  middleName?: string;
  gender?: string;
  dob?: string;
  email?: string;
  phoneNo?: string;
  [key: string]: any;
}

interface ValidationErrors {
  [key: string]: string;
}
interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export const validateRegisterForm = (
  data: RegisterFormData,
): ValidationErrors => {
  const errors: ValidationErrors = {};

  Object.keys(data).forEach(field => {
    const value = data[field];

    switch (field) {
      case 'firstName':
        if (!value) {
          errors.firstName = ERROR_HANDLER_TEXT.firstNameReq;
        }
        break;
      case 'middleName':
        if (!value) {
          errors.middleName = ERROR_HANDLER_TEXT.middleNameRed;
        }
        break;
      case 'gender':
        if (!value) {
          errors.gender = ERROR_HANDLER_TEXT.genderReq;
        }
        break;
      case 'dob':
        if (!value) {
          errors.dob = ERROR_HANDLER_TEXT.dobReq;
        }
        break;
      case 'email':
        const {isValid: isEmailValid, errors: emailErrors} =
          emailValidation(value);
        if (!isEmailValid && emailErrors?.email) {
          errors.email = emailErrors.email;
        }
        break;
      case 'phoneNo':
        const {isValid: isPhoneValid, errors: phoneErrors} =
          mobileNumberValidation(value);
        if (!isPhoneValid && phoneErrors?.mobile) {
          errors.phoneNo = phoneErrors.mobile;
        }
        break;
      default:
        break;
    }
  });

  return errors;
};

export function validateForm(data: {
  email?: string;
  phoneNo?: string;
  password?: string;
}, type: number): ValidationResult {
  let isValid = true;
  const errors: Record<string, string> = {};

  if (type === 0) {
    if (!data.email) {
      errors['email'] = ERROR_HANDLER_TEXT.pleaseEnterEmail;
      isValid = false;
    } else {
      const emailValidationResult = emailValidation(data.email);
      if (!emailValidationResult.isValid) {
        isValid = false;
        errors['email'] = emailValidationResult.errors['email'];
      }
    }

    if (!data.password) {
      errors['password'] = ERROR_HANDLER_TEXT.enterPassword;
      isValid = false;
    }
  } else if (type === 1) {
    if (!data.phoneNo) {
      errors['phoneNo'] = ERROR_HANDLER_TEXT.pleaseEnterMobileNo;
      isValid = false;
    } else {
      const mobileValidationResult = mobileNumberValidation(data.phoneNo);
      if (!mobileValidationResult.isValid) {
        isValid = false;
        errors['phoneNo'] = mobileValidationResult.errors['mobile'];
      }
    }
  }

  return { isValid, errors };
}
