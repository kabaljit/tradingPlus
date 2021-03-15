import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { LoginScreen } from '../../screens/Login';
import { RegistrationScreen } from '../../screens/Registration';
import theme from '../../theme';

const Stack = createStackNavigator();

const backgroundColor = theme.colorPalette.red[6];
const options = {
  headerStyle: {
    backgroundColor: backgroundColor,
  },
  headerTintColor: theme.colorPalette.white[0],
  cardStyle: { backgroundColor: theme.colorPalette.white[0] },
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              title: 'Login',
              headerShown: false,
              ...options,
            }}
          />
          <Stack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{
              title: 'Signup',
              ...options,
            }}
          />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
