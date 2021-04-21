import * as React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Image, StyleSheet, View } from 'react-native';

import { P } from '../Typography';
import { Box } from '../Box';
import theme from '../../theme';
import { apiKey } from '../../utils/cryptoAPI';

import { PortfolioItemProps } from './portfolioItem.models';
import { PortfolioItemView, PortfolioItemImage } from './portfolioItem.styles';
import { i18n } from './portfolioItem.i18n';
import { images } from '../../data';
import Logo from '../../../assets/images/logo1.svg';
import { SvgUri } from 'react-native-svg';
export const PortfolioItem: React.FunctionComponent<PortfolioItemProps> = ({
  title,
  currentValue,
  price,
  amount,
  logoUrl,
  onPress,
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

  const [logo, setLogo] = React.useState(images.logo);
  const [svgLogo, setSvgLogo] = React.useState();

  React.useEffect(() => {
    if (logoUrl) {
      if (logoUrl.includes('.svg')) {
        setSvgLogo(logoUrl);
      } else {
        setLogo({ uri: logoUrl });
      }
    }
  }, []);

  return (
    <PortfolioItemView
      backgroundColor={theme.colors.tradingZ.majesticPeak}
      onPress={onPress}
    >
      <Box flexDirection="row" flex={1} spacing={{ bottom: 2 }}>
        <View
          style={{
            width: 35,
            height: 35,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {svgLogo ? (
            <SvgUri uri={svgLogo} width={35} height={35} />
          ) : (
            <PortfolioItemImage source={logo} />
          )}
        </View>

        <Box flex={1} spacing={{ left: 3 }}>
          <Box
            flexDirection="row"
            justifyContent="space-between"
            spacing={{ bottom: 2 }}
          >
            <P color="white" weight="bold" size="small">
              {title}
            </P>

            <P color="white" size="small">
              $ {price}
            </P>
          </Box>
          <Box alignItems="flex-end">
            <P color={profitColor} size="small">
              {amount && ProfitAndPercentage()}
            </P>
          </Box>
        </Box>
      </Box>
    </PortfolioItemView>
  );
};
