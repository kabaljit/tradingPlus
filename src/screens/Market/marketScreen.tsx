import * as React from 'react';
import { FlatList } from 'react-native-gesture-handler';

import SuperScreen from '../../components/SuperScreen';
import PortfolioItem from '../../components/PortfolioItem';

import {
  // MarketScreenFormValues,
  MarketScreenProps,
} from './marketScreen.models';
import { i18n } from './marketScreen.i18n';

const DATA = {
  Currencies: [
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
  ],
};

const renderItem = ({ item }) => {
  return <PortfolioItem title={item.currency} price={item.currentPrice} />;
};

export const MarketScreen: React.FunctionComponent<MarketScreenProps> = (
  {
    // navigation,
  }
) => {
  return (
    <>
      <SuperScreen statusBarColor="light-content" background={'charcoal'}>
        <FlatList
          data={DATA.Currencies}
          renderItem={renderItem}
          // keyExtractor={(item) => item.id}
        />
      </SuperScreen>
    </>
  );
};

export default MarketScreen;
