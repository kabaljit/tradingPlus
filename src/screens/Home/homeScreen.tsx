import * as React from 'react';
import { FlatList, View, Text } from 'react-native';

import PortfolioItem from '../../components/PortfolioItem';

import { HomeScreenFormValues, HomeScreenProps } from './homeScreen.models';
import { i18n } from './homeScreen.i18n';

const DATA = {
  users: [
    {
      defaultCurrency: 'usdt',
      uid: '00000001',
      email: 'k.singh@themediastrategy.com',
      firstname: 'kabaljit',
      portfolio: [
        {
          amount: 2,
          currency: 'usdt',
          price: 10000,
        },
        {
          amount: 2,
          currency: 'btc',
          price: 10000,
        },
        {
          amount: 1000,
          currency: 'matic',
          price: 1,
        },
        {
          amount: 1000,
          currency: 'eth',
          price: 1,
        },
      ],
      surname: 'Singh',
    },
  ],
  transcations: [
    {
      amount: 1,
      finalCurrency: 'btc',
      senderId: '00000001',
      receiverId: '00000001',
      initialCurrency: 'usdt',
      orderType: 'buy',
      price: 10000,
      purchaseTime: 125456563456,
      timestamp: 135456563456,
    },
    {
      amount: 1,
      finalCurrency: 'btc',
      initialCurrency: 'usdt',
      senderId: '00000001',
      receiverId: '00000001',
      orderType: 'sell',
      price: 11000,
      timestamp: 1235456563456,
    },
  ],
};

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
        currentValue={currentValue}
      />
    );
  };

  return (
    <>
      <FlatList
        data={DATA.users[0].portfolio}
        renderItem={renderItem}
        // keyExtractor={(item) => item.id}
      />
    </>
  );
};

export default HomeScreen;
