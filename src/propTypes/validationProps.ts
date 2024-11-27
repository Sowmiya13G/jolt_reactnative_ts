// REGISTER SCREEN
export interface ValidationRegisterScreenFormErrors {
  firstName?: string;
  middleName?: string;
  gender?: string;
  dob?: string;
  email?: string;
  phoneNo?: string;
  check?: boolean;
}

export interface ValidationErrors {
  [key: string]: string;
}
export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}
