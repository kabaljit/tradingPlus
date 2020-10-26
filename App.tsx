import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListSectionsScreen } from "./src/screens/ListSections";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { GoalScreen } from "./src/screens/Goal";
import { UserStoriesScreen } from "./src/screens/UserStories/";
import { MockScreen } from "./src/screens/Mock";
import { ComparisonScreen } from "./src/screens/Comparison";

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
        <Stack.Screen name="Goal" component={GoalScreen} />
        <Stack.Screen name="UserStories" component={UserStoriesScreen} />
        <Stack.Screen name="Mock" component={MockScreen} />
        <Stack.Screen name="Comparison" component={ComparisonScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
