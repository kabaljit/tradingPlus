import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SettingsScreen } from '../../../screens/Settings';
import { options } from '../shared';
import { ProfileScreen } from '../../../screens/Profile';
import { PasswordResetScreen } from '../../../screens/PasswordReset';

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
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        title: 'Profile',
        headerShown: false,
        ...options,
      }}
    />
    <Stack.Screen
      name="PasswordReset"
      component={PasswordResetScreen}
      options={{
        title: 'Reset Password',
        headerShown: false,
        ...options,
      }}
    />
  </Stack.Navigator>
);
