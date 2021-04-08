import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { LoginScreen } from '../../screens/Login';
import { RegistrationScreen } from '../../screens/Registration';
import theme from '../../theme';
import { HomeScreen } from '../../screens/Home';
import navigationService, {
  isReadyRef,
  navigationRef,
} from '../../utils/navigationService';
import firebase from '../../firebase';

const Stack = createStackNavigator();

const backgroundColor = theme.colors.tradingZ.charcoal;
const options = {
  headerStyle: {
    backgroundColor: backgroundColor,
  },
  headerTintColor: theme.colors.tradingZ.white,
  cardStyle: { backgroundColor: theme.colors.tradingZ.white },
};
import * as SplashScreen from 'expo-splash-screen';

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
          navigationService.navigate('Home');
        } else {
          navigationService.navigate('Login');
        }
        SplashScreen.hideAsync();
      });
    } catch (e) {
      console.warn('[Navigation] failed to get user info: ', e);
    }
  }, []);

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
            name="Home"
            component={HomeScreen}
            options={{
              ...options,
            }}
          />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
