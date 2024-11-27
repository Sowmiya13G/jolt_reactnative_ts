import {ERROR_HANDLER_TEXT, strings} from '../constant/strings';
import {RegisterScreenFormData} from '../propTypes/screenProps';
import {ValidationErrors, ValidationResult} from '../propTypes/validationProps';
import {
  emailValidation,
  mobileNumberValidation,
  passwordValidation,
} from './codeSnippets';

export const validateRegisterForm = (
  data: RegisterScreenFormData,
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
      case 'check':
        if (!value) {
          errors.check = ERROR_HANDLER_TEXT.acceptTC;
        }
        break;
      default:
        break;
    }
  });

  return errors;
};

export function validateForm(
  data: {
    email?: string;
    phoneNo?: string;
    password?: string;
  },
  type: number,
): ValidationResult {
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

  return {isValid, errors};
}

export function validateFormPassword(
  data: {
    email?: string;
    newPassword?: string;
    confirmPassword?: string;
  },
  type: string,
): ValidationResult {
  let isValid = true;
  const errors: Record<string, string> = {};

  const isForgotPasswordScreen = type === strings.forgotPasswordTitle;
  const isNewPasswordScreen = type === strings.createNewPassword;

  if (isForgotPasswordScreen) {
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
  } else if (isNewPasswordScreen) {
    if (!data.newPassword) {
      errors['newPassword'] = ERROR_HANDLER_TEXT.enterNewPassword;
      isValid = false;
    } else {
      const passwordValidationResult = passwordValidation(data.newPassword);
      if (!passwordValidationResult.isValid) {
        isValid = false;
        errors['newPassword'] = passwordValidationResult.errors['newPassword'];
      }
    }

    if (!data?.confirmPassword) {
      errors['confirmPassword'] = ERROR_HANDLER_TEXT.enterConfirmPassword;
      isValid = false;
    }
    if (
      data.newPassword &&
      data.confirmPassword &&
      data.newPassword !== data.confirmPassword
    ) {
      errors['confirmPassword'] = ERROR_HANDLER_TEXT.passwordsShouldBeSame;
      isValid = false;
    }
  }

  return {isValid, errors};
}
