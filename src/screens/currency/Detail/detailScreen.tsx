import * as React from 'react';
import RNBottomsheet from 'reanimated-bottom-sheet';

import { Image } from 'react-native';
import {
  DetailScreenFormValues,
  DetailScreenProps,
} from './detailScreen.models';
import { i18n } from './detailScreen.i18n';
import SuperScreen from '../../../components/SuperScreen';
import { P, Title } from '../../../components/Typography';
import { PrimaryButton } from '../../../components/buttons/Primary/primaryButton';
import Graph from '../../../components/Graph';
import { Box, Row } from '../../../components/Box';
import { FlatList, View } from 'react-native';
import { images } from '../../../data';
import { scale } from '../../../utils/layout';
import Bottomsheet from '../../../components/Bottomsheet';
// import NewGraph from '../../../components/NewGraph';

const data = [
  {
    amount: 1,
    finalCurrency: 'BTC',
    initialCurrency: 'USDT',
    orderType: 'sell',
    price: 11000,
    receiverId: '00000001',
    senderId: '00000001',
    timestamp: 1235456563456,
  },
  {
    amount: 1,
    finalCurrency: 'USDT',
    initialCurrency: 'BTC',
    orderType: 'buy',
    price: 11000,
    receiverId: '00000001',
    senderId: '00000001',
    timestamp: 1235456563456,
  },
];
export const DetailScreen: React.FunctionComponent<DetailScreenProps> = ({
  route,
}) => {
  const data = route.params;

  console.log('data: ', data);

  const renderItem = React.useCallback(({ item }) => {
    const p = (item.orderType === 'sell' && {
      icon: images.arrowUp,
      label: i18n.t('sellLabel'),
      amount: `-${item.amount} ${item.finalCurrency}`,
    }) || {
      icon: images.arrowDown,
      label: i18n.t('buyLabel'),
      amount: `+${item.amount} ${item.initialCurrency}`,
    };

    return (
      <Row flexDirection="row" alignItems="center" justifyContent="center">
        <Image source={p.icon} width={scale(12)} />
        <Row
          flexDirection="row"
          flex={1}
          justifyContent="space-between"
          spacing={{ bottom: 0, left: 4 }}
        >
          <Row spacing={{ bottom: 0 }}>
            <P>{p.label}</P>
            <P>{item.timestamp}</P>
          </Row>
          <P color={item.orderType === 'buy' ? 'success' : 'error'}>
            {p.amount}
          </P>
        </Row>
      </Row>
    );
  }, []);

  const buyRef = React.useRef<RNBottomsheet>(null);
  const sellRef = React.useRef<RNBottomsheet>(null);

  const renderBuyContent = React.useCallback(
    () => (
      <View
        style={{
          backgroundColor: 'white',
          padding: 16,
          height: 450,
        }}
      >
        <P color="blue">WE CAN BUY NOW </P>
      </View>
    ),
    []
  );

  const renderSellContent = React.useCallback(
    () => (
      <View
        style={{
          backgroundColor: 'white',
          padding: 16,
          height: 450,
        }}
      >
        <P color="blue">WE CAN SELL NOW </P>
      </View>
    ),
    []
  );

  return (
    <>
      <SuperScreen background="charcoal" hasPadding={false} scrollable={true}>
        {/* <Title>Detail screen</Title> */}
        <Graph />
        <Row
          flexDirection="row"
          spacing={{ left: 4, right: 4, top: 4, bottom: 4 }}
        >
          <Box flex={1}>
            <PrimaryButton
              backgroundColor="success"
              labelColor="white"
              onPress={() => {
                console.log('Pressed the button');
                sellRef.current.snapTo(2);
                buyRef.current.snapTo(0);
              }}
            >
              {i18n.t('buyLabel')}
            </PrimaryButton>
          </Box>
          <Row spacing={{ left: 4, right: 4 }} />
          <Box flex={1}>
            <PrimaryButton
              backgroundColor="error"
              labelColor="white"
              onPress={() => {
                console.log('Pressed the button');
                buyRef.current.snapTo(2);
                sellRef.current.snapTo(0);
              }}
            >
              {i18n.t('sellLabel')}
            </PrimaryButton>
          </Box>
        </Row>
        <Row spacing={{ left: 4, right: 4, top: 4 }}>
          <P weight="medium"> {i18n.t('recentActivityLabel')}</P>
          <Row spacing={{ top: 1 }} />
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.timestamp + item.senderId}
          />
        </Row>
      </SuperScreen>
      <Bottomsheet ref={buyRef} renderContent={renderBuyContent} />
      <Bottomsheet ref={sellRef} renderContent={renderSellContent} />
    </>
  );
};

export default DetailScreen;
