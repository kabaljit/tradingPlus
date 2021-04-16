import * as React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

import SuperScreen from '../../../components/SuperScreen';
import PortfolioItem from '../../../components/PortfolioItem';
import TextInput from '../../../components/TextInput';
import { apiKey } from '../../../utils/cryptoAPI';
import { P } from '../../../components/Typography';

import {
  MarketScreenFormValues,
  MarketScreenProps,
} from './marketScreen.models';
import { i18n } from './marketScreen.i18n';

export const MarketScreen: React.FunctionComponent<MarketScreenProps> = ({
  navigation,
}) => {
  const [filteredData, setFilteredData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.nomics.com/v1/prices?key=${apiKey}&format=json&per-page=10&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setFilteredData(data);
        setMasterData(data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.error('Error caught:', e);
        setIsLoading(false);
      });
  }, []);

  const searchFilter = React.useCallback((text: string) => {
    if (text) {
      const newData = masterData.filter((item) => {
        if (item.currency.includes(text.toUpperCase())) {
          return item;
        }
      });
      setFilteredData(newData);
      setSearch(text);
    } else {
      setFilteredData(masterData);
      setSearch(text);
    }
  }, []);

  const renderItem = React.useCallback(({ item }) => {
    return (
      <PortfolioItem
        title={item.currency}
        price={item.price}
        onPress={() => navigation.navigate('detailCurrency', { item: item })}
      />
    );
  }, []);

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
          ListFooterComponent={
            isLoading ? <ActivityIndicator color="#666" /> : <></>
          }
          // keyExtractor={(item) => item.id}
        />
      </SuperScreen>
    </>
  );
};

export default MarketScreen;
