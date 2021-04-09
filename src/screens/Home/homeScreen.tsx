import * as React from 'react';
import { FlatList, Text } from 'react-native';

import PortfolioItem from '../../components/PortfolioItem';
import SuperScreen from '../../components/SuperScreen';
import firebase from '../../firebase';

import { HomeScreenProps } from './homeScreen.models';
import { i18n } from './homeScreen.i18n';

export const HomeScreen: React.FunctionComponent<HomeScreenProps> = ({}) => {
  //Main login  go here

  // TODO: INSTEAD OF FETCHING ALL DATA, ONLY FETCH DATA OF LOGGED IN USER
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    firebase
      .database()
      .ref('users')
      .on('value', (snapshot) => {
        const data = snapshot.val();
        console.log('users:', data);
        setUsers(data);
      });
  }, [setUsers]);

  const renderItem = ({ item }) => {
    const currentValue = 10000;
    const defaultCurrency = 'USD';
    return (
      <PortfolioItem
        title={item.currency + ' / ' + defaultCurrency}
        amount={item.amount}
        price={item.price}
        currentValue={currentValue}
      />
    );
  };
  console.log('usersL : ', users);

  return (
    <>
      <SuperScreen statusBarColor="light-content" background={'charcoal'}>
        <Text>{}</Text>
        <FlatList
          data={users[0]?.portfolio || []}
          renderItem={renderItem}
          // keyExtractor={(item) => item.id}
        />
      </SuperScreen>
    </>
  );
};

export default HomeScreen;
