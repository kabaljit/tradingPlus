import { generateI18n } from '../../utils/i18n';

export const i18n = generateI18n('passwordResetScreen', {
  en: {
    currentPasswordLabel: 'Current Password',
    newPasswordLabel: 'New Password',
    passwordErrorMessage: 'Password is required',
    passwordUppercaseError: 'Need an Uppercase in the Password',
    passwordLowercaseError: 'Need a Lowercase in the Password',
    passwordNumberError: 'Need a number in the Password',
    passwordLengthError: 'Need atleast 8 Characters in the Password',
    submitButtonLabel: 'Reset Password',
    passwordRequirementTopic: 'Password Requirements:',
    lengthRequirement: '  - Need atleast 8 Characters',
    uppercaseRequirement: '  - Include One Uppercase Character',
    lowercaseRequirement: '  - Include One Lowercase Character',
    numericRequirement: '  - Include One Numeric Character',
  },
});
