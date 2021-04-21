import * as React from 'react';
import RNBottomsheet from 'reanimated-bottom-sheet';
import { Image } from 'react-native';
import format from 'date-fns/format';
import subHours from 'date-fns/subHours';
import subDays from 'date-fns/subDays';
import subWeeks from 'date-fns/subWeeks';
import subMonths from 'date-fns/subMonths';
import subYears from 'date-fns/subYears';

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
import { Currency } from '../../../api/currencies';
import { apiKey } from '../../../utils/cryptoAPI';
import { tr } from 'date-fns/locale';
import { buildGraph } from '../../../components/Graph/graph.utils';
// import NewGraph from '../../../components/NewGraph';

export const DetailScreen: React.FunctionComponent<DetailScreenProps> = ({
  route,
}) => {
  const currencyInfo: Currency = route.params.item;
  const [hourlyData, setHourlyData] = React.useState(null);
  const [daylyData, setDaylyData] = React.useState(null);
  const [monthlyData, setMonthlyData] = React.useState(null);
  const [yearlyData, setYearlyData] = React.useState(null);
  const [allYearlyData, setAllYearlyData] = React.useState(null);

  React.useEffect(() => {
    // One hour from current
    const hourDate = subHours(new Date(), 1).toISOString();
    console.log('runnig hourly;');
    fetch(
      `https://api.nomics.com/v1/currencies/sparkline?key=${apiKey}&ids=${
        currencyInfo.currency
      }&start=${encodeURI(hourDate)}`
    )
      .then((response) => response.json())
      .then((data) => {
        setHourlyData(data[0]);
      });

    // One day from current
    const dayDate = subDays(new Date(), 1).toISOString();
    console.log(
      'date day: ',
      `https://api.nomics.com/v1/currencies/sparkline?key=${apiKey}&ids=${
        currencyInfo.currency
      }&start=${encodeURI(dayDate)}`
    );
    // Adding the 1 second delay to prevent 429 error: Too  many request =>  Api Limit 1 request/second
    setTimeout(() => {
      fetch(
        `https://api.nomics.com/v1/currencies/sparkline?key=${apiKey}&ids=${
          currencyInfo.currency
        }&start=${encodeURI(dayDate)}`
      )
        .then((response) => {
          console.log('response: ', response);
          return response.json();
        })
        .then((data) => {
          console.log('Day data: ', data);

          setDaylyData(data[0]);
        });
    }, 1000);

    // Adding the 1 second delay to prevent 429 error: Too  many request =>  Api Limit 1 request/second

    // One month from current
    const weekDate = subMonths(new Date(), 1).toISOString();
    setTimeout(() => {
      fetch(
        `https://api.nomics.com/v1/currencies/sparkline?key=${apiKey}&ids=${
          currencyInfo.currency
        }&start=${encodeURI(weekDate)}`
      )
        .then((response) => response.json())
        .then((data) => {
          setMonthlyData(data[0]);
        });
    }, 2000);

    // Adding the 1 second delay to prevent 429 error: Too  many request =>  Api Limit 1 request/second
    setTimeout(() => true, 1000);
    // One year from current
    const yearDate = subYears(new Date(), 1).toISOString();
    setTimeout(() => {
      fetch(
        `https://api.nomics.com/v1/currencies/sparkline?key=${apiKey}&ids=${
          currencyInfo.currency
        }&start=${encodeURI(yearDate)}`
      )
        .then((response) => {
          response.json();
        })
        .then((data) => {
          console.log('data year: ', data);
          setYearlyData(data[0]);
        });
    }, 3000);
    // Adding the 1 second delay to prevent 429 error: Too  many request =>  Api Limit 1 request/second

    // One 5 year from current
    const yearsDate = subYears(new Date(), 4).toISOString();
    console.log('yearly-----');
    console.log(
      'url: ',
      `https://api.nomics.com/v1/currencies/sparkline?key=${apiKey}&ids=${
        currencyInfo.currency
      }&start=${encodeURI(yearsDate)}`
    );
    setTimeout(() => {
      fetch(
        `https://api.nomics.com/v1/currencies/sparkline?key=${apiKey}&ids=${
          currencyInfo.currency
        }&start=${encodeURI(yearsDate)}`
      )
        .then((response) => response.json())
        .then((data) => {
          setAllYearlyData(data[0]);
        });
    }, 4000);
  }, []);

  const graphData = React.useMemo(
    () => [
      {
        label: '1H',
        value: 0,
        data: hourlyData && buildGraph(hourlyData, 'Last Hour'),
      },
      {
        label: '1D',
        value: 1,
        data: daylyData && buildGraph(daylyData, 'Today'),
      },
      {
        label: '1M',
        value: 2,
        data: monthlyData && buildGraph(monthlyData, 'Last Month'),
      },
      {
        label: '1Y',
        value: 3,
        data: yearlyData && buildGraph(yearlyData, 'This Year'),
      },
      {
        label: 'all',
        value: 4,
        data: allYearlyData && buildGraph(allYearlyData, 'All time'),
      },
    ],
    [allYearlyData]
  );

  console.log('{Detail screen]: graphData: ', graphData);

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
        <Graph data={graphData} />

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
            data={currencyInfo}
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
