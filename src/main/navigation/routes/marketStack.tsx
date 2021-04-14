import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MarketScreen } from '../../../screens/currency/Market';
import { options } from '../shared';
import { DetailScreen } from '../../../screens/currency/Detail';

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
      <Stack.Screen
        name="detailCurrency"
        component={DetailScreen}
        options={{
          headerShown: false,
          ...options,
        }}
      />
    </Stack.Navigator>
  );
};
