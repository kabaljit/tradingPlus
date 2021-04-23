import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../../../screens/Home';
import { options } from '../shared';
import { DetailScreen } from '../../../screens/currency/Detail';

const Stack = createStackNavigator();

export const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Home',
        headerShown: true,
        ...options,
      }}
    />
    <Stack.Screen
      name="DetailCurrency"
      component={DetailScreen}
      options={{
        // headerShown: false,
        title: 'Currency Screen',
        ...options,
      }}
    />
  </Stack.Navigator>
);
