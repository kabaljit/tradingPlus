import * as React from 'react';
import { Image } from 'react-native';

import theme from '../../theme';
import { images } from '../../data';

const backgroundColor = theme.colors.tradingZ.charcoal;

export const options = {
  headerStyle: {
    backgroundColor: backgroundColor,
  },
  headerTintColor: theme.colors.tradingZ.white,
  cardStyle: { backgroundColor: theme.colors.tradingZ.white },
};

export const renderIcon = (icon: keyof typeof images) => (
  <Image source={images[icon]} width={24} height={24} />
);
