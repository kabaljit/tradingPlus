import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MarketScreen } from '../../../screens/Market';
import { options } from '../shared';

const Stack = createStackNavigator();

export const MarketStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="searchCurrencies"
        component={MarketScreen}
        options={{
          headerShown: false,
          ...options,
        }}
      />
    </Stack.Navigator>
  );
};
