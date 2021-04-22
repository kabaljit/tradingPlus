import * as React from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

import PortfolioItem from '../../components/PortfolioItem';
import SuperScreen from '../../components/SuperScreen';
import firebase from '../../firebase';

import { HomeScreenProps } from './homeScreen.models';
import { i18n } from './homeScreen.i18n';
import _ from 'lodash';

export const HomeScreen: React.FunctionComponent<HomeScreenProps> = ({
  navigation,
}) => {
  //Main login  go here

  // TODO: INSTEAD OF FETCHING ALL DATA, ONLY FETCH DATA OF LOGGED IN USER
  const [userData, setUserData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    const user = firebase.auth().currentUser;
    firebase
      .database()
      .ref(`users/${user?.uid}`)
      .on('value', (snapshot) => {
        const data = snapshot.val();
        setUserData(data);
        setIsLoading(false);
      });
  }, []);

  const renderItem = ({ item }) => {
    const currentValue = 10000;
    const defaultCurrency = 'USD';

    return (
      <PortfolioItem
        // title={`${item.currency} / ${defaultCurrency}`}
        title={`${item.currentInfo.currency}`.toUpperCase()}
        amount={Number(item.amount)}
        price={Number(item.total)}
        currentValue={currentValue}
        logoUrl={item.currentInfo.logo_url}
        onPress={() =>
          navigation.navigate('DetailCurrency', { item: item.currentInfo })
        }
      />
    );
  };

  return (
    <>
      <SuperScreen
        statusBarColor="light-content"
        background={'charcoal'}
        scrollable={true}
      >
        <View
          style={{
            width: 350,
            height: 350,
            backgroundColor: 'white',
            alignSelf: 'center',
          }}
        />
        <FlatList
          data={_.values(userData.portfolio || [])}
          renderItem={renderItem}
          ListFooterComponent={isLoading && <ActivityIndicator />}
          keyExtractor={(item) => item.id + item.currency}
        />
      </SuperScreen>
    </>
  );
};

export default HomeScreen;
