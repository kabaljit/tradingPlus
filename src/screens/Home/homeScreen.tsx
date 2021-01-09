import * as React from "react";
import { Text } from "react-native";

import { HomeScreenFormValues, HomeScreenProps } from "./homeScreen.models";
import { i18n } from "./homeScreen.i18n";
import { AuthContext } from "../../main/AuthProvider";

export const HomeScreen: React.FunctionComponent<HomeScreenProps> = ({}) => {
  const { user } = React.useContext(AuthContext);
  console.log("user:", user);
  return (
    <>
      <Text> Testing 1 </Text>
    </>
  );
};

export default HomeScreen;
