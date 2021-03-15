import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../../screens/Home';
import { LoginScreen } from '../../screens/Login';
import { RegistrationScreen } from '../../screens/Registration';
import theme from '../../theme';
import { AuthContext } from '../AuthProvider';
import firebase from 'firebase';
import { ActivityIndicator, View } from 'react-native';
import { CoinDetailScreen } from '../../screens/CoinDetail/coinDetailScreen';
import { BuyScreen } from '../../screens/Buy/buyScreen';

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
  const { user, setUser } = React.useContext(AuthContext);
  const [loading, setLoading] = React.useState(true);

  // TODO: improve the auth logic, make a hook
  const onAuthStateChanged = (user) => {
    setUser(user);
    setLoading(false);
  };

  React.useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: 10,
        }}
      >
        <ActivityIndicator color={theme.colorPalette.red[4]} />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!user ? (
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
        ) : (
          <>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: 'Home',
                ...options,
              }}
            />
            <Stack.Screen
              name="CoinDetail"
              component={CoinDetailScreen}
              options={{
                title: 'Detail',
                ...options,
              }}
            />
            <Stack.Screen
              name="BuyCoin"
              component={BuyScreen}
              options={{
                title: 'Buy',
                ...options,
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
