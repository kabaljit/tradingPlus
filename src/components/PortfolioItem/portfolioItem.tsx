import * as React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Image, StyleSheet } from 'react-native';

import { P } from '../Typography';
import { Box } from '../Box';
import theme from '../../theme';
import { apiKey } from '../../utils/cryptoAPI';

import { PortfolioItemProps } from './portfolioItem.models';
import { PortfolioItemView } from './portfolioItem.styles';
import { i18n } from './portfolioItem.i18n';

export const PortfolioItem: React.FunctionComponent<PortfolioItemProps> = ({
  title,
  currentValue,
  price,
  amount,
}) => {
  const profit = React.useMemo<number>(() => {
    return currentValue * amount - price;
  }, [amount, currentValue, price]);

  const profitPercentage = React.useMemo(() => {
    return Number(((profit / price) * 100).toFixed(2));
  }, [price, profit]);

  const profitColor = React.useMemo(() => {
    if (profit < 0) return 'error';
    return 'success';
  }, [profit]);

  function ProfitAndPercentage() {
    return `${profit} / ${profitPercentage}%`;
  }

  const [logoUri, setlogoUri] = React.useState('');

  // let logoURI = '';

  React.useEffect(() => {
    fetchLogo();
    return () => {};
  }, [title]);

  const fetchLogo = () => {
    fetch(
      `https://api.nomics.com/v1/currencies/ticker?key=${apiKey}&ids=${title.toUpperCase()}&interval=0&convert=USD`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log('title is ', title);
        console.log(
          'api link:',
          `https://api.nomics.com/v1/currencies/ticker?key=${apiKey}&ids=${title}&interval=0&convert=USD`
        );
        console.log('logo url: ', data[0].logo_url);
        setlogoUri(data[0].logo_url);
      });
  };
  // fetchLogo();

  return (
    <TouchableOpacity>
      <PortfolioItemView backgroundColor={theme.colors.tradingZ.deepMagenta}>
        <Box flexDirection="row">
          <Box>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: logoUri,
              }}
            />
          </Box>

          <Box flex={1} spacing={{ left: 3 }}>
            <Box flexDirection="row" flex={1} justifyContent="space-between">
              <P color="white" weight="bold" size="large">
                {title}
              </P>

              <P color="white" size="large">
                $ {price}
              </P>
            </Box>
            <Box alignItems="flex-end">
              <P color={profitColor}>{profit && ProfitAndPercentage()}</P>
            </Box>
          </Box>
        </Box>
      </PortfolioItemView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
