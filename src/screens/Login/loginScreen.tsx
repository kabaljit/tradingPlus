import * as React from "react";

import { LoginScreenFormValues, LoginScreenProps } from "./loginScreen.models";
import { i18n } from "./loginScreen.i18n";
import { Button, ScrollView, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TextInput from "../../components/TextInput";
import { Box } from "../../components/Box";
import { PrimaryButton } from "../../components/buttons";
import SuperScreen from "../../components/SuperScreen";

export const LoginScreen: React.FunctionComponent<LoginScreenProps> = ({}) => {
  const navigaiton = useNavigation();

  const onLoginPress = () =>
    React.useCallback(() => {
      console.log("Login press");
    }, []);

  return (
    <>
      <SuperScreen>
        <Box flex={1}>
          <Box spacing={{ bottom: 4, top: 4 }}>
            <TextInput placeholder="Username" />
          </Box>
          <Box spacing={{ bottom: 8 }}>
            <TextInput placeholder="Password" />
          </Box>
          <PrimaryButton onPress={onLoginPress}>Submit</PrimaryButton>
        </Box>
      </SuperScreen>
    </>
  );
};

export default LoginScreen;
