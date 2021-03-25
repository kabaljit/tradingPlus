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

/**
 * Validate the Password Requirements
 * @param password
 * @returns
 */
export const validatePassword = (password: string) => {
  const hasUppercase = /[A-Z]/;
  const hasLowercase = /[a-z]/;
  const hasNumber = /\d/;

  if (!hasUppercase.test(password)) {
    return ErrorPasswordType.Uppercase;
  } else if (!hasLowercase.test(password)) {
    return ErrorPasswordType.Lowercase;
  } else if (!hasNumber.test(password)) {
    return ErrorPasswordType.Number;
  } else if (password.length <= 8) {
    return ErrorPasswordType.Length;
  }
  return true;
};
