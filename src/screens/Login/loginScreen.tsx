import * as React from "react";

import { LoginScreenFormValues, LoginScreenProps } from "./loginScreen.models";
import { i18n } from "./loginScreen.i18n";
import { Button, ScrollView, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TextInput from "../../components/TextInput";
import { Box } from "../../components/Box";
import { PrimaryButton } from "../../components/buttons";

export const LoginScreen: React.FunctionComponent<LoginScreenProps> = ({}) => {
  const navigaiton = useNavigation();

  const onLoginPress = () =>
    React.useCallback(() => {
      console.log("Login press");
    }, []);

  return (
    <>
      <Box flex={1}>
        <Box spacing={{ bottom: 2 }}>
          <TextInput placeholder="Username" />
        </Box>
        <Box spacing={{ bottom: 2 }}>
          <TextInput placeholder="Password" />
        </Box>
        <View style={{ margin: 7 }} />
      </Box>
      <PrimaryButton onPress={onLoginPress}>Submit</PrimaryButton>
    </>
  );
};

export default LoginScreen;
