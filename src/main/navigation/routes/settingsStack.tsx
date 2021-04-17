import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SettingsScreen } from '../../../screens/Settings';
import { options } from '../shared';

const Stack = createStackNavigator();

export const SettingsStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Settigs"
      component={SettingsScreen}
      options={{
        title: 'Settings',
        headerShown: true,
        ...options,
      }}
    />
  </Stack.Navigator>
);
