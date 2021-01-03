import * as React from "react";

import { LoginScreenFormValues, LoginScreenProps } from "./loginScreen.models";
import { i18n } from "./loginScreen.i18n";
import { Button, ScrollView, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TextInput from "../../components/TextInput";
import { Box } from "../../components/Box";

export const LoginScreen: React.FunctionComponent<LoginScreenProps> = ({}) => {
  const navigaiton = useNavigation();

  const onLoginPress = () =>
    React.useCallback(() => {
      console.log("Login press");
    }, []);

  return (
    <>
      <ScrollView style={{ padding: 20 }}>
        <Box spacing={{ bottom: 2 }}>
          <TextInput placeholder="Username" />
        </Box>
        <Box spacing={{ bottom: 2 }}>
          <TextInput placeholder="Password" />
        </Box>
        <View style={{ margin: 7 }} />
        <Button onPress={onLoginPress} title="Submit" />
      </ScrollView>
    </>
  );
};

export default LoginScreen;
