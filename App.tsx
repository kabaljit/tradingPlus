import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListSectionsScreen } from "./src/screens/ListSections";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ListSectionsScreen}
          options={{ title: "Welcome" }}
        />
        {/* <Stack.Screen name="Home" component={ListSectionsScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
