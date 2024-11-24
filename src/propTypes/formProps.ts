

// Validation



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


