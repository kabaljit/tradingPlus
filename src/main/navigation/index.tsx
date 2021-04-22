import * as React from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as SplashScreen from 'expo-splash-screen';

import { LoginScreen } from '../../screens/Login';
import { RegistrationScreen } from '../../screens/Registration';
import navigationService, {
  navigationRef,
} from '../../utils/navigationService';
import firebase from '../../firebase';

import { HomeStack } from './routes/homeStack';
import { MarketStack } from './routes/marketStack';
import { SettingsStack } from './routes/settingsStack';
import { options, renderIcon } from './shared';

const Stack = createStackNavigator();

export default function Navigation() {
  React.useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        // await SplashScreen.preventAutoHideAsync();
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
          navigationService.replace('HomeTabs');
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

  const TabNavigator = () => {
    return (
      <HomeTabs.Navigator>
        <HomeTabs.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: () => renderIcon('home'),
          }}
        />
        <HomeTabs.Screen
          name="Market"
          component={MarketStack}
          options={{
            tabBarLabel: 'Market',
            tabBarIcon: () => renderIcon('graph'),
          }}
        />
        <HomeTabs.Screen
          name="Settings"
          component={SettingsStack}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: () => renderIcon('user'),
          }}
        />
      </HomeTabs.Navigator>
    );
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
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
          component={TabNavigator}
          options={() => ({
            headerShown: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
