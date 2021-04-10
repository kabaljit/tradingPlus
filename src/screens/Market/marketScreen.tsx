import * as React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { useState, useEffect } from 'react';

import SuperScreen from '../../components/SuperScreen';
import PortfolioItem from '../../components/PortfolioItem';
import TextInput from '../../components/TextInput';

import {
  MarketScreenFormValues,
  MarketScreenProps,
} from './marketScreen.models';
import { i18n } from './marketScreen.i18n';

const DATA = [
  {
    currency: 'USD',
    currentPrice: 10000,
  },
  {
    currency: 'BTC',
    currentPrice: 78456,
  },
  {
    currency: 'MATIC',
    currentPrice: 1,
  },
  {
    currency: 'ETH',
    currentPrice: 1,
  },
];

const renderItem = ({ item }) => {
  return <PortfolioItem title={item.currency} price={item.currentPrice} />;
};

export const MarketScreen: React.FunctionComponent<MarketScreenProps> = ({
  navigation,
}) => {
  const [filteredData, setfilteredData] = useState([]);
  const [masterData, setmasterData] = useState([]);
  const [search, setsearch] = useState('');

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  const fetchData = () => {
    setfilteredData(DATA);
    setmasterData(DATA);
  };

  const searchFilter = (text: string) => {
    if (text) {
      const newData = masterData.filter((item) => {
        if (item.currency.includes(text.toUpperCase())) {
          return item;
        }
      });
      setfilteredData(newData);
      setsearch(text);
    } else {
      setfilteredData(masterData);
      setsearch(text);
    }
  };

  return (
    <>
      <SuperScreen statusBarColor="light-content" background={'charcoal'}>
        <TextInput
          value={search}
          placeholder="Search Here"
          onChangeText={(text) => searchFilter(text)}
        />
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          // keyExtractor={(item) => item.id}
        />
      </SuperScreen>
    </>
  );
};

export default MarketScreen;
