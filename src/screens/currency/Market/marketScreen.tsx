import * as React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import { ActivityIndicator, Image } from 'react-native';

import SuperScreen from '../../../components/SuperScreen';
import PortfolioItem from '../../../components/PortfolioItem';
import TextInput from '../../../components/TextInput';
import { apiKey } from '../../../utils/cryptoAPI';
import { images } from '../../../data';
import { Row } from '../../../components/Box';
import { P, Title } from '../../../components/Typography';
import { Currency } from '../../../api/currencies';

import { i18n } from './marketScreen.i18n';
import { MarketScreenProps } from './marketScreen.models';

export const MarketScreen: React.FunctionComponent<MarketScreenProps> = ({
  navigation,
}) => {
  const [filteredData, setFilteredData] = useState<Currency[]>([]);
  const [masterData, setMasterData] = useState<Currency[]>([]);

  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.nomics.com/v1/currencies/ticker?key=${apiKey}&interval=1d,2d,30d&convert=EUR&per-page=10&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        setFilteredData(data);
        setMasterData(data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.warn('[MarketScreen] Failed to load the graph data: ', e);
        setIsLoading(false);
      });
  }, []);

  const searchFilter = React.useCallback(
    (text: string) => {
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
    },
    [masterData]
  );

  const renderItem = React.useCallback(({ item }) => {
    return (
      <PortfolioItem
        logoUrl={item.logo_url}
        title={item.currency}
        price={item.price}
        onPress={() => navigation.navigate('DetailCurrency', { item: item })}
      />
    );
  }, []);

  return (
    <>
      <SuperScreen
        statusBarColor="light-content"
        background={'charcoal'}
        flex={1}
      >
        <Row>
          <TextInput
            value={search}
            placeholder={i18n.t('searchLabel')}
            onChangeText={(text) => searchFilter(text)}
            accessoryLeft={
              <Image
                style={{ tintColor: 'white' }}
                source={images.search}
                width={19}
                height={21}
              />
            }
          />
        </Row>
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          ListFooterComponent={
            isLoading ? (
              <Row spacing={{ top: 6 }}>
                <ActivityIndicator color="#666" />
              </Row>
            ) : (
              <></>
            )
          }
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            !isLoading ? (
              <Row
                spacing={{ top: 12 }}
                flex={1}
                justifyContent="center"
                alignItems="center"
              >
                <Title size="large">{i18n.t('emptyListTitle')}</Title>
                <P>{i18n.t('emptyListLabel')}</P>
                <Row spacing={{ top: 12, bottom: 12 }} flex={1} />
                <Image
                  source={images.userNoFound}
                  style={{ width: '80%', height: 240 }}
                />
              </Row>
            ) : (
              <></>
            )
          }
        />
      </SuperScreen>
    </>
  );
};

export default MarketScreen;
