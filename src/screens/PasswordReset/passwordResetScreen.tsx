import * as React from 'react';
import { Formik, FormikErrors } from 'formik';
import firebase from 'firebase';
import { useNavigation } from '@react-navigation/native';

import SuperScreen from '../../components/SuperScreen';
import InputWrapper from '../../components/InputWrapper';
import PasswordInput from '../../components/PasswordInput';
import { PrimaryButton } from '../../components/buttons';
import { ErrorPasswordType, validatePassword } from '../../utils/validation';
import { Box } from '../../components/Box';
import { P } from '../../components/Typography';

import {
  PasswordResetScreenFormValues,
  PasswordResetScreenProps,
} from './passwordResetScreen.models';
import { i18n } from './passwordResetScreen.i18n';

export const PasswordResetScreen: React.FunctionComponent<PasswordResetScreenProps> = ({}) => {
  const [loading, setLoading] = React.useState(false);
  // const { login } = React.useContext(AuthContext);
  const navigation = useNavigation();

  const reauthenticate = (currentPassword: string) => {
    const user = firebase.auth().currentUser;
    const cred = firebase.auth.EmailAuthProvider.credential(
      user.email,
      currentPassword
    );
    return user.reauthenticateWithCredential(cred);
  };
  const changePassword = (currentPassword: string, newPassword: string) => {
    reauthenticate(currentPassword)
      .then(() => {
        const user = firebase.auth().currentUser;
        user
          .updatePassword(newPassword)
          .then(() => {
            console.log('Password updated!');
            navigation.navigate('Home');
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSubmit = React.useCallback(
    (values: PasswordResetScreenFormValues) => {
      setLoading(true);
      // do something on submit
      changePassword(values.currentPassword, values.newPassword);
    },
    []
  );
  const requirementChecklist = [''];
  const textColor = (reqType: string) => {
    if (requirementChecklist.includes(reqType)) {
      return 'success';
    }
    return 'white';
  };

  const validate = React.useCallback(
    (values: PasswordResetScreenFormValues) => {
      const errors: FormikErrors<PasswordResetScreenFormValues> = {};
      if (values.currentPassword) {
        const passwordValidation = validatePassword(values.currentPassword);
        if (passwordValidation === ErrorPasswordType.Number) {
          errors.currentPassword = i18n.t('passwordNumberError');
        } else if (passwordValidation === ErrorPasswordType.Uppercase) {
          errors.currentPassword = i18n.t('passwordUppercaseError');
        } else if (passwordValidation === ErrorPasswordType.Lowercase) {
          errors.currentPassword = i18n.t('passwordLowercaseError');
        } else if (passwordValidation === ErrorPasswordType.Length) {
          errors.currentPassword = i18n.t('passwordLengthError');
        }
      } else {
        errors.currentPassword = i18n.t('passwordErrorMessage');
      }
      if (values.newPassword) {
        const passwordValidation = validatePassword(values.newPassword);
        if (passwordValidation === ErrorPasswordType.Number) {
          errors.newPassword = i18n.t('passwordNumberError');
          requirementChecklist.push(ErrorPasswordType.Number);
        } else if (passwordValidation === ErrorPasswordType.Uppercase) {
          errors.newPassword = i18n.t('passwordUppercaseError');
          requirementChecklist.push(ErrorPasswordType.Uppercase);
        } else if (passwordValidation === ErrorPasswordType.Lowercase) {
          errors.newPassword = i18n.t('passwordLowercaseError');
          requirementChecklist.push(ErrorPasswordType.Lowercase);
        } else if (passwordValidation === ErrorPasswordType.Length) {
          errors.newPassword = i18n.t('passwordLengthError');
          requirementChecklist.push(ErrorPasswordType.Length);
        }
      } else {
        errors.newPassword = i18n.t('passwordErrorMessage');
      }
      return errors;
    },
    []
  );

  return (
    <>
      <SuperScreen
        statusBarColor="light-content"
        background={'charcoal'}
        statusBarBackground="charcoal"
      >
        <Formik
          initialValues={{
            currentPassword: '',
            newPassword: '',
          }}
          onSubmit={onSubmit}
          validate={validate}
        >
          {({
            values,
            touched,
            errors,
            setFieldTouched,
            setFieldValue,
            handleSubmit,
          }) => (
            <>
              <InputWrapper
                errorVisible={
                  touched.currentPassword && !!errors.currentPassword
                }
                errorMessage={errors.currentPassword}
                testID="lossOrStolenRadioButtonError"
              >
                <PasswordInput
                  label={i18n.t('currentPasswordLabel')}
                  value={values.currentPassword}
                  error={!!errors.currentPassword}
                  onBlur={() => setFieldTouched('currentPassword')}
                  onChangeText={(value) =>
                    setFieldValue('currentPassword', value)
                  }
                />
              </InputWrapper>

              <InputWrapper
                errorVisible={touched.newPassword && !!errors.newPassword}
                errorMessage={errors.newPassword}
                testID="lossOrStolenRadioButtonError"
              >
                <PasswordInput
                  label={i18n.t('newPasswordLabel')}
                  value={values.newPassword}
                  error={!!errors.newPassword}
                  onBlur={() => setFieldTouched('newPassword')}
                  onChangeText={(value) => setFieldValue('newPassword', value)}
                />
              </InputWrapper>
              <Box spacing={{ bottom: 8, left: 6 }}>
                <P>{i18n.t('passwordRequirementTopic')}</P>
                <P color={textColor(ErrorPasswordType.Length)}>
                  {i18n.t('lengthRequirement')}
                </P>
                <P color={textColor(ErrorPasswordType.Uppercase)}>
                  {i18n.t('uppercaseRequirement')}
                </P>
                <P color={textColor(ErrorPasswordType.Lowercase)}>
                  {i18n.t('lowercaseRequirement')}
                </P>
                <P color={textColor(ErrorPasswordType.Number)}>
                  {i18n.t('numericRequirement')}
                </P>
              </Box>
              <Box justifyContent="flex-end" flex={1} spacing={{ bottom: 3 }}>
                <PrimaryButton onPress={() => handleSubmit()} loading={loading}>
                  {i18n.t('submitButtonLabel')}
                </PrimaryButton>
              </Box>
            </>
          )}
        </Formik>
      </SuperScreen>
    </>
  );
};

export default PasswordResetScreen;
