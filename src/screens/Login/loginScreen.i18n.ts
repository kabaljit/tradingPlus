import { generateI18n } from '../../utils/i18n';

export const i18n = generateI18n('loginScreen', {
  en: {
    emailErrorMessage: 'Email is required',
    passwordErrorMessage: 'Name is required',
    submitButtonLabel: 'Login',
    forgetPasswordLabel: 'Forget password?',
    registerAccountLabel: "Don’t have an account?",
    registerAccountLinkLabel: "Create an account?",
  },
});
