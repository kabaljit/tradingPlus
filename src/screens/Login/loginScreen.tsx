/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik, FormikErrors } from 'formik';
import { TouchableOpacity } from 'react-native-gesture-handler';

import TextInput from '../../components/TextInput';
import { Box, Row } from '../../components/Box';
import { PrimaryButton } from '../../components/buttons';
import SuperScreen from '../../components/SuperScreen';
import InputWrapper from '../../components/InputWrapper';
import { AuthContext } from '../../main/AuthProvider';
import { P, Title } from '../../components/Typography';
import PasswordInput from '../../components/PasswordInput';
import { SafeArea } from '../../components/Layout';
import {
  validatePassword,
  validateEmail,
  ErrorPasswordType,
} from '../../utils/validation';
import { images } from '../../data';

import { i18n } from './loginScreen.i18n';
import { LoginScreenFormValues, LoginScreenProps } from './loginScreen.models';

export const LoginScreen: React.FunctionComponent<LoginScreenProps> = ({}) => {
  const [loading, setLoading] = React.useState(false);
  const navigation = useNavigation();

  // TODO: Add types for AuthContext
  const { login } = React.useContext(AuthContext);

  const validate = React.useCallback((values: LoginScreenFormValues) => {
    const errors: FormikErrors<LoginScreenFormValues> = {};

    if (values.email) {
      if (!validateEmail(values.email)) {
        errors.email = i18n.t('emailFormatErrorMessage');
      }
    } else {
      errors.email = i18n.t('emailErrorMessage');
    }
    if (values.password) {
      const passwordValidation = validatePassword(values.password);
      if (passwordValidation.numeric) {
        errors.password = i18n.t('passwordNumberError');
      } else if (passwordValidation.uppercase) {
        errors.password = i18n.t('passwordUppercaseError');
      } else if (passwordValidation.lowercase) {
        errors.password = i18n.t('passwordLowercaseError');
      } else if (passwordValidation.length) {
        errors.password = i18n.t('passwordLengthError');
      }
    } else {
      errors.password = i18n.t('passwordErrorMessage');
    }

    return errors;
  }, []);

  const onSubmit = React.useCallback((values: LoginScreenFormValues) => {
    setLoading(true);
    // do something on submit
    login(values.email, values.password)
      .then(() => {
        navigation.navigate('Home');
        setLoading(false);
      })
      .catch((error) => {
        console.warn('[login] Failed to login: ', error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <SuperScreen
        statusBarColor="light-content"
        background={'charcoal'}
        statusBarBackground="charcoal"
      >
        <SafeArea>
          <Formik
            initialValues={{
              email: '',
              password: '',
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
                <Box flex={1} justifyContent="space-between">
                  <Row alignItems="center" spacing={{ top: 9, bottom: 9 }}>
                    <Image
                      source={images.logo}
                      width={50}
                      height={50}
                      style={{ width: 80, height: 90 }}
                    />
                    <Row alignItems="center" spacing={{ top: 5, bottom: 9 }}>
                      <Title color="white"> {i18n.t('title')}</Title>
                    </Row>
                  </Row>

                  <Box justifyContent="center">
                    {/* <Image source={images.logo} width={10} height={10} /> */}
                    <InputWrapper
                      errorVisible={touched.email && !!errors.email}
                      errorMessage={errors.email}
                      testID="lossOrStolenRadioButtonError"
                    >
                      <TextInput
                        label={i18n.t('emailLabel')}
                        value={values.email}
                        onBlur={() => setFieldTouched('email')}
                        error={!!errors.email}
                        onChangeText={(value) => setFieldValue('email', value)}
                      />
                    </InputWrapper>

                    <InputWrapper
                      errorVisible={touched.password && !!errors.password}
                      errorMessage={errors.password}
                      testID="lossOrStolenRadioButtonError"
                    >
                      <PasswordInput
                        label={i18n.t('passwordLabel')}
                        value={values.password}
                        error={!!errors.password}
                        onBlur={() => setFieldTouched('password')}
                        onChangeText={(value) =>
                          setFieldValue('password', value)
                        }
                      />
                    </InputWrapper>
                    <Box alignItems="center" spacing={{ bottom: 4 }}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Registration')}
                      >
                        <P color="link" align="right">
                          {i18n.t('forgetPasswordLabel')}
                        </P>
                      </TouchableOpacity>
                    </Box>
                    <PrimaryButton
                      onPress={() => handleSubmit()}
                      loading={loading}
                    >
                      {i18n.t('submitButtonLabel')}
                    </PrimaryButton>
                  </Box>
                  <Box
                    justifyContent="flex-end"
                    alignItems="center"
                    spacing={{ top: 5 }}
                    flex={1}
                  >
                    <Row>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Registration')}
                      >
                        <P color="link">{i18n.t('registerAccountLabel')}</P>
                      </TouchableOpacity>
                    </Row>
                  </Box>
                </Box>
              </>
            )}
          </Formik>
        </SafeArea>
      </SuperScreen>
    </>
  );
};

export default LoginScreen;
