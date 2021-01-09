import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./src/screens/Home";
import { LoginScreen } from "./src/screens/Login";
import theme from "./src/theme";
import { RegistrationScreen } from "./src/screens/Registration";

import App from "./src/main";

const Stack = createStackNavigator();
const backgroundColor = theme.colorPalette.red[6];
const options = {
  headerStyle: {
    backgroundColor: backgroundColor,
  },
  headerTintColor: theme.colorPalette.white[0],
  cardStyle: { backgroundColor: theme.colorPalette.white[0] },
};

export default App;
