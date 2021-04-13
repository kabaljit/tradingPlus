import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as SplashScreen from 'expo-splash-screen';

import { LoginScreen } from '../../screens/Login';
import { RegistrationScreen } from '../../screens/Registration';
import theme from '../../theme';
import { HomeScreen } from '../../screens/Home';
import { MarketScreen } from '../../screens/Market/marketScreen';
import navigationService, {
  isReadyRef,
  navigationRef,
} from '../../utils/navigationService';
import firebase from '../../firebase';

const backgroundColor = theme.colors.tradingZ.charcoal;
const options = {
  headerStyle: {
    backgroundColor: backgroundColor,
  },
  headerTintColor: theme.colors.tradingZ.white,
  cardStyle: { backgroundColor: theme.colors.tradingZ.white },
};

const Stack = createStackNavigator();

export default function Navigation() {
  React.useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(
          '[Navigation] failed to get prevent splash screen to hide: ',
          e
        );
      }
    }
    prepare();
  }, []);

  React.useEffect(() => {
    try {
      // Getting user info
      firebase.auth().onAuthStateChanged((user) => {
        // Is user logged in ?
        if (user) {
          navigationService.navigate('HomeTabs');
        } else {
          navigationService.navigate('Login');
        }
        SplashScreen.hideAsync();
      });
    } catch (e) {
      console.warn('[Navigation] failed to get user info: ', e);
    }
  }, []);

  const HomeTabs = createBottomTabNavigator();

  function HomeTabScreens() {
    return (
      <HomeTabs.Navigator>
        <HomeTabs.Screen
          name="Home"
          component={HomeScreen}
          options={{ tabBarLabel: 'Home' }}
        />
        <HomeTabs.Screen
          name="Market"
          component={MarketScreen}
          options={{ tabBarLabel: 'Market' }}
        />
      </HomeTabs.Navigator>
    );
  }

  function getHeaderTitle(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

    switch (routeName) {
      case 'Home':
        return 'Home Screen';
      case 'Market':
        return 'Market Screen';
    }
  }

  return (
    <NavigationContainer ref={navigationRef}>
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
          <Stack.Screen
            name="HomeTabs"
            component={HomeTabScreens}
            options={({ route }) => ({
              headerTitle: getHeaderTitle(route),
            })}
          />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
