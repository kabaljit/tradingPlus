import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./src/screens/Home";
import { LoginScreen } from "./src/screens/Login";

const Stack = createStackNavigator();
const backgroundColor = "#3871C2";
const options = {
  headerStyle: {
    backgroundColor: backgroundColor,
  },
  headerTintColor: "#fff",
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: "Login",
            ...options,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Home",
            ...options,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
