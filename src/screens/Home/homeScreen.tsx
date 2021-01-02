import * as React from "react";
import { Text } from "react-native";

import { HomeScreenFormValues, HomeScreenProps } from "./homeScreen.models";
import { i18n } from "./homeScreen.i18n";

export const HomeScreen: React.FunctionComponent<HomeScreenProps> = ({}) => {
  return (
    <>
      <Text> Testing 1 </Text>
    </>
  );
};

export default HomeScreen;
