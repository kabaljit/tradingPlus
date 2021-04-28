import * as React from 'react';
import { Formik, FormikErrors } from 'formik';
import { useNavigation } from '@react-navigation/native';

import SuperScreen from '../../components/SuperScreen';
import { Box, Row } from '../../components/Box';
import TextInput from '../../components/TextInput';
import { PrimaryButton } from '../../components/buttons';
import InputWrapper from '../../components/InputWrapper';
import firebase from '../../firebase';
import { Title } from '../../components/Typography/Typography';
import { P } from '../../components/Typography';
import { PasswordInput } from '../../components/PasswordInput/PasswordInput';
import {
  ErrorPasswordType,
  validateEmail,
  validatePassword,
} from '../../utils/validation';

import {
  RegistrationScreenFormValues,
  RegistrationScreenProps,
} from './registrationScreen.models';
import { i18n } from './registrationScreen.i18n';

export const RegistrationScreen: React.FunctionComponent<RegistrationScreenProps> = () => {
  const [loading, setLoading] = React.useState(false);
  const navigation = useNavigation();

  const requirementChecklist = [''];

  const validate = React.useCallback((values: RegistrationScreenFormValues) => {
    const errors: FormikErrors<RegistrationScreenFormValues> = {};
    if (!values.name) {
      errors.name = i18n.t('nameErrorMessage');
    }

    if (values.email) {
      if (!validateEmail(values.email)) {
        errors.email = i18n.t('emailFormatErrorMessage');
      }
    } else {
      errors.email = i18n.t('emailErrorMessage');
    }
    if (values.password) {
      const passwordValidation = validatePassword(values.password);
      if (passwordValidation === ErrorPasswordType.Number) {
        errors.password = i18n.t('passwordNumberError');
        requirementChecklist.push(ErrorPasswordType.Number);
      } else if (passwordValidation === ErrorPasswordType.Uppercase) {
        errors.password = i18n.t('passwordUppercaseError');
        requirementChecklist.push(ErrorPasswordType.Uppercase);
      } else if (passwordValidation === ErrorPasswordType.Lowercase) {
        errors.password = i18n.t('passwordLowercaseError');
        requirementChecklist.push(ErrorPasswordType.Lowercase);
      } else if (passwordValidation === ErrorPasswordType.Length) {
        errors.password = i18n.t('passwordLengthError');
        requirementChecklist.push(ErrorPasswordType.Number);
      }
    } else {
      errors.password = i18n.t('passwordErrorMessage');
    }
    return errors;
  }, []);

  const textColor = (reqType: string) => {
    if (requirementChecklist.includes(reqType)) {
      return 'success';
    }
    return 'white';
  };

  const onSubmit = React.useCallback(
    (values: RegistrationScreenFormValues) => {
      setLoading(true);
      // do something on submit

      firebase
        .auth()
        .createUserWithEmailAndPassword(values.email, values.password)
        .then((res) => {
          res.user?.updateProfile({
            displayName: values.name,
          });

          setLoading(false);
          navigation.navigate('Login');
        })
        .catch((error) => {
          setLoading(false);
        });

      // setLoading(false);
    },
    [setLoading, loading, firebase]
  );

  return (
    <>
      <SuperScreen background={'charcoal'} statusBarColor="light-content">
        <Box alignItems="center" spacing={{ top: 4, bottom: 4 }}>
          <Title>{i18n.t('title')} </Title>
          <Row spacing={{ bottom: 4 }} />
          <P color={() => (true ? 'success' : 'primary')}>
            {i18n.t('subTitle')}
          </P>
        </Box>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          onSubmit={onSubmit}
          validate={validate}
        >
          {(formikProps) => (
            <Box flex={1}>
              <InputWrapper
                errorVisible={
                  formikProps.touched.name && !!formikProps.errors.name
                }
                errorMessage={formikProps.errors.name}
                testID="lossOrStolenRadioButtonError"
              >
                <TextInput
                  placeholder="Name"
                  value={formikProps.values.name}
                  onChangeText={(value) =>
                    formikProps.setFieldValue('name', value)
                  }
                />
              </InputWrapper>

              <InputWrapper
                errorVisible={
                  formikProps.touched.email && !!formikProps.errors.email
                }
                errorMessage={formikProps.errors.email}
                testID="lossOrStolenRadioButtonError"
              >
                <TextInput
                  placeholder="Email"
                  value={formikProps.values.email}
                  onBlur={() => formikProps.setFieldTouched('email')}
                  error={!!formikProps.errors.email}
                  onChangeText={(value) =>
                    formikProps.setFieldValue('email', value)
                  }
                />
              </InputWrapper>

              <InputWrapper
                errorVisible={
                  formikProps.touched.password && !!formikProps.errors.password
                }
                errorMessage={formikProps.errors.password}
                testID="lossOrStolenRadioButtonError"
              >
                <PasswordInput
                  placeholder="Password"
                  value={formikProps.values.password}
                  error={!!formikProps.errors.password}
                  onBlur={() => formikProps.setFieldTouched('password')}
                  onChangeText={(value) =>
                    formikProps.setFieldValue('password', value)
                  }
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

              <PrimaryButton
                onPress={() => formikProps.handleSubmit()}
                loading={loading}
              >
                Submit
              </PrimaryButton>
            </Box>
          )}
        </Formik>
      </SuperScreen>
    </>
  );
};

export default RegistrationScreen;
