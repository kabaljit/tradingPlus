import { generateI18n } from '../../utils/i18n';

export const i18n = generateI18n('loginScreen', {
  en: {
    title:'Welcome back!!',
    emailErrorMessage: 'Email is required',
    emailFormatErrorMessage: 'Email is Invalid',
    passwordErrorMessage: 'Password is required',
    passwordUppercaseError: 'Need an Uppercase in the Password',
    passwordLowercaseError: 'Need a Lowercase in the Password',
    passwordNumberError: 'Need a number in the Password',
    passwordLengthError: 'Need atleast 8 Characters in the Password',
    submitButtonLabel: 'Login',
    registerAccountLabel: "Still, don't have an account?",
    forgetPasswordLabel: 'Forget password?',
  },
});
