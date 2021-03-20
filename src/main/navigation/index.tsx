import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { LoginScreen } from '../../screens/Login';
import { RegistrationScreen } from '../../screens/Registration';
import theme from '../../theme';

const Stack = createStackNavigator();

const backgroundColor = theme.colors.tradingZ.charcoal;
const options = {
  headerStyle: {
    backgroundColor: backgroundColor,
  },
  headerTintColor: theme.colors.tradingZ.white,
  cardStyle: { backgroundColor: theme.colors.tradingZ.white },
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
