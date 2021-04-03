import * as React from 'react';
import { FlatList, Text } from 'react-native';

import PortfolioItem from '../../components/PortfolioItem';
import SuperScreen from '../../components/SuperScreen';
import { database } from '../../firebase';

import { HomeScreenProps } from './homeScreen.models';
import { i18n } from './homeScreen.i18n';

const DATA = database().ref('/users');
// const DATA =

export const HomeScreen: React.FunctionComponent<HomeScreenProps> = ({
  navigation,
}) => {
  //Main login  go here

  const renderItem = ({ item }) => {
    const currentValue = 10000;
    return (
      <PortfolioItem
        title={item.currency}
        amount={item.amount}
        price={item.price}
        currentValue={currentValue}
      />
    );
  };

  return (
    <>
      <SuperScreen statusBarColor="light-content" background={'charcoal'}>
        <Text>{}</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          // keyExtractor={(item) => item.id}
        />
      </SuperScreen>
    </>
  );
};

export default HomeScreen;
