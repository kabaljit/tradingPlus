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
import { StackScreen } from "./src/screens/Stack";

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
          name="Home"
          component={ListSectionsScreen}
          options={{
            title: "Home",
            ...options,
          }}
        />
        <Stack.Screen
          name="Goal"
          component={GoalScreen}
          options={{
            ...options,
          }}
        />
        <Stack.Screen
          name="UserStories"
          component={UserStoriesScreen}
          options={{
            ...options,
          }}
        />
        <Stack.Screen
          name="Mock"
          component={MockScreen}
          options={{
            ...options,
          }}
        />
        <Stack.Screen
          name="Comparison"
          component={ComparisonScreen}
          options={{
            ...options,
          }}
        />
        <Stack.Screen
          name="Stack"
          component={StackScreen}
          options={{
            ...options,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
