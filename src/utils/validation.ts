export const validateEmail = (email: string) => {
  const emailFormat = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/gm;
  if (emailFormat.test(email)) {
    return true;
  }
  return false;
};

export const isPasswordValid = (password: string) => {
  const passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/gm;
  if (passwordFormat.test(password)) {
    return true;
  }
  return false;
};

export enum ErrorPasswordType {
  Uppercase = 'UPPER',
  Number = 'NUMBER',
  Lowercase = 'LOWER',
  Length = 'LENGTH',
}
export interface ErrorType {
  uppercase: boolean;
  lowercase: boolean;
  length: boolean;
  numeric: boolean;
}
/**
 * Validate the Password Requirements
 * @param password
 * @returns
 */

export const validatePassword = (password: string) => {
  const hasUppercase = /[A-Z]/;
  const hasLowercase = /[a-z]/;
  const hasNumber = /\d/;
  const errors = {
    uppercase: true,
    lowercase: true,
    length: true,
    numeric: true,
  };
  if (hasUppercase.test(password)) {
    errors.uppercase = false;
  }
  if (hasLowercase.test(password)) {
    errors.lowercase = false;
  }
  if (hasNumber.test(password)) {
    errors.numeric = false;
  }
  if (password.length >= 8) {
    errors.length = false;
  }
  return errors;
};
