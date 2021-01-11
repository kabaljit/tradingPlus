import * as React from "react";

import { LoginScreenFormValues, LoginScreenProps } from "./loginScreen.models";
import { i18n } from "./loginScreen.i18n";
import { Button, ScrollView, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TextInput from "../../components/TextInput";
import { Box } from "../../components/Box";
import { PrimaryButton } from "../../components/buttons";
import SuperScreen from "../../components/SuperScreen";
import { Formik, FormikErrors } from "formik";
import InputWrapper from "../../components/InputWrapper";
import firebase from "../../firebase";
import { AuthContext } from "../../main/AuthProvider";
import { TouchableOpacity } from "react-native-gesture-handler";
import { P } from "../../components/Typography";

export const LoginScreen: React.FunctionComponent<LoginScreenProps> = ({}) => {
  const [loading, setLoading] = React.useState(false);
  const navigation = useNavigation();

  const { login } = React.useContext(AuthContext);
  const validate = React.useCallback((values: LoginScreenFormValues) => {
    const errors: FormikErrors<LoginScreenFormValues> = {};

    if (!values.email) {
      errors.email = i18n.t("emailErrorMessage");
    }
    if (!values.password) {
      errors.password = i18n.t("passwordErrorMessage");
    }
    return errors;
  }, []);

  const onSubmit = React.useCallback((values: LoginScreenFormValues) => {
    setLoading(true);
    // do something on submit
    login(values.email, values.password)
      .then(() => {
        console.log("User login successfully!");
        navigation.navigate("Home");
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error: ", error);
        setLoading(false);
      });

    console.log("Login the registation");
  }, []);

  return (
    <>
      <SuperScreen>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={onSubmit}
          validate={validate}
        >
          {(formikProps) => (
            <>
              <Box flex={1}>
                <InputWrapper
                  errorVisible={!!formikProps.errors.email}
                  errorMessage={formikProps.errors.email}
                  testID="lossOrStolenRadioButtonError"
                >
                  <TextInput
                    placeholder="Email"
                    value={formikProps.values.email}
                    onChangeText={(value) =>
                      formikProps.setFieldValue("email", value)
                    }
                  />
                </InputWrapper>

                <InputWrapper
                  errorVisible={!!formikProps.errors.password}
                  errorMessage={formikProps.errors.password}
                  testID="lossOrStolenRadioButtonError"
                >
                  <TextInput
                    placeholder="Password"
                    value={formikProps.values.password}
                    onChangeText={(value) =>
                      formikProps.setFieldValue("password", value)
                    }
                  />
                </InputWrapper>

                <PrimaryButton
                  onPress={() => formikProps.handleSubmit()}
                  loading={loading}
                >
                  {i18n.t("submitButtonLabel")}
                </PrimaryButton>
              </Box>
              <Box justifyContent="center" spacing={{ top: 5 }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("registration")}
                >
                  <P>Still, don't have an account?</P>
                </TouchableOpacity>
              </Box>
            </>
          )}
        </Formik>
      </SuperScreen>
    </>
  );
};

export default LoginScreen;
