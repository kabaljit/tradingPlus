import * as React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { useState, useEffect } from 'react';

import SuperScreen from '../../../components/SuperScreen';
import PortfolioItem from '../../../components/PortfolioItem';
import TextInput from '../../../components/TextInput';
import { apiKey } from '../../../utils/cryptoAPI';

import {
  MarketScreenFormValues,
  MarketScreenProps,
} from './marketScreen.models';
import { i18n } from './marketScreen.i18n';

const renderItem = ({ item }) => {
  return <PortfolioItem title={item.currency} price={item.price} />;
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
    fetch(
      `https://api.nomics.com/v1/prices?key=${apiKey}&format=json&per-page=10&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setfilteredData(data);
        setmasterData(data);
      })
      .catch((e) => console.error('Error caught:', e));
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
