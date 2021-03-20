import * as React from 'react';
import { Button, ScrollView, View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik, FormikErrors } from 'formik';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { database } from 'firebase';

import TextInput from '../../components/TextInput';
import { Box, Row } from '../../components/Box';
import { PrimaryButton } from '../../components/buttons';
import SuperScreen from '../../components/SuperScreen';
import InputWrapper from '../../components/InputWrapper';
import firebase from '../../firebase';
import { AuthContext } from '../../main/AuthProvider';
import { P, Title } from '../../components/Typography';
import PasswordInput from '../../components/PasswordInput';
import { SafeArea } from '../../components/Layout';

import { i18n } from './loginScreen.i18n';
import { LoginScreenFormValues, LoginScreenProps } from './loginScreen.models';

export const LoginScreen: React.FunctionComponent<LoginScreenProps> = ({}) => {
  const [loading, setLoading] = React.useState(false);
  const navigation = useNavigation();

  const { login } = React.useContext(AuthContext);
  const validate = React.useCallback((values: LoginScreenFormValues) => {
    const errors: FormikErrors<LoginScreenFormValues> = {};

    if (!values.email) {
      errors.email = i18n.t('emailErrorMessage');
    }
    if (!values.password) {
      errors.password = i18n.t('passwordErrorMessage');
    }
    return errors;
  }, []);

  const onSubmit = React.useCallback((values: LoginScreenFormValues) => {
    setLoading(true);
    // do something on submit
    login(values.email, values.password)
      .then(() => {
        console.log('User login successfully!');
        navigation.navigate('Home');
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error: ', error);
        setLoading(false);
      });

    console.log('Login the registation');
  }, []);

  return (
    <>
      <SuperScreen statusBarColor="dark-content" background={'skyBlue'}>
        <SafeArea>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={onSubmit}
            validate={validate}
          >
            {(formikProps) => (
              <>
                <Box>
                  <Box>
                    <Title> Welcome back!!</Title>
                  </Box>
                </Box>
                <view
                /*Empty container for the logo*/
                />
                <Box flex={10} spacing={{ top: 4 }} justifyContent="center">
                  <InputWrapper
                    errorVisible={!!formikProps.errors.email}
                    errorMessage={formikProps.errors.email}
                    testID="lossOrStolenRadioButtonError"
                  >
                    <TextInput
                      placeholder="Email"
                      value={formikProps.values.email}
                      onChangeText={(value) =>
                        formikProps.setFieldValue('email', value)
                      }
                    />
                  </InputWrapper>

                  <InputWrapper
                    errorVisible={!!formikProps.errors.password}
                    errorMessage={formikProps.errors.password}
                    testID="lossOrStolenRadioButtonError"
                  >
                    <PasswordInput
                      placeholder="Password"
                      value={formikProps.values.password}
                      onChangeText={(value) =>
                        formikProps.setFieldValue('password', value)
                      }
                    />
                  </InputWrapper>

                  <TouchableOpacity
                    onPress={() => navigation.navigate('Registration')}
                  >
                    <P color="link" align="right">
                      {i18n.t('forgetPasswordLabel')}
                    </P>
                  </TouchableOpacity>

                  <PrimaryButton
                    onPress={() => formikProps.handleSubmit()}
                    loading={loading}
                  >
                    {i18n.t('submitButtonLabel')}
                  </PrimaryButton>
                </Box>
                <Box
                  justifyContent="center"
                  alignItems="center"
                  spacing={{ top: 5 }}
                >
                  <Row>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Registration')}
                    >
                      <P color="link">{i18n.t('registerAccountLabel')}</P>
                    </TouchableOpacity>
                  </Row>
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
