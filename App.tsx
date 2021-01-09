import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./src/screens/Home";
import { LoginScreen } from "./src/screens/Login";
import theme from "./src/theme";
import * as firebase from "firebase";

const Stack = createStackNavigator();
const backgroundColor = theme.colorPalette.red[6];
const options = {
  headerStyle: {
    backgroundColor: backgroundColor,
  },
  headerTintColor: theme.colorPalette.white[0],
  cardStyle: { backgroundColor: theme.colorPalette.white[0] },
};

var firebaseConfig = {
  apiKey: "AIzaSyDcIRUEKSblScEI1JTL_YVQUr__h2-O0a0",
  authDomain: "tradingplus-ee6fe.firebaseapp.com",
  databaseURL:
    "https://tradingplus-ee6fe-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tradingplus-ee6fe",
  storageBucket: "tradingplus-ee6fe.appspot.com",
  messagingSenderId: "119488355341",
  appId: "1:119488355341:web:9e1ec5ea0682434fc14944",
  measurementId: "G-VQYHKB5TK3",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

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
