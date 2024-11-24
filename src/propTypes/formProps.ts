// FORGOT PASSWORD

// props

export interface ForgotPasswordScreenProps {
  route: {
    params: {
      type: string;
    };
  };
}
// data
export interface DataState {
  email: string;
  newPassword: string;
  confirmPassword: string;
}
// error
export interface ErrorState {
  email: string;
  newPassword: string;
  confirmPassword: string;
}

export interface FormData {
  firstName: string;
  middleName: string;
  gender?: string | null;
  dob: string | null;
  email: string;
  phoneNo: string;
}

// Validation

export interface ValidationFormErrors {
  firstName?: string;
  middleName?: string;
  gender?: string;
  dob?: string;
  email?: string;
  phoneNo?: string;
}

export interface RegisterFormData {
  firstName?: string;
  middleName?: string;
  gender?: string;
  dob?: string;
  email?: string;
  phoneNo?: string;
  [key: string]: any;
}

export interface ValidationErrors {
  [key: string]: string;
}
export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export interface FilterListItem {
  id: number | string;
  label: string;
  value:string
}
