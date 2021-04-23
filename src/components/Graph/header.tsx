import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated';
import { ReText, round } from 'react-native-redash';

import theme from '../../theme';

import { HeaderProps } from './graph.models';

// import ETH from './components/ETH';
import { SIZE } from './graph.utils';

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  values: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  value: {
    fontWeight: '500',
    fontSize: 24,
    color: theme.colors.tradingZ.white,
  },
  label: {
    fontSize: 18,
    color: theme.colors.tradingZ.white,
  },
});

const Header: React.FunctionComponent<HeaderProps> = ({
  translation,
  index,
  graphs,
  currencyName,
}) => {
  const data = useDerivedValue(() => graphs[index.value].data);
  const price = useDerivedValue(() => {
    const p = interpolate(
      translation.y.value,
      [0, SIZE],
      [data.value?.maxPrice | 0, data.value.minPrice | 0]
    );
    return `$ ${round(p, 2).toLocaleString('en-US', { currency: 'USD' })}`;
  });
  const percentChange = useDerivedValue(
    () => `${round(data.value.percentChange | 0, 3)}%`
  );
  const label = useDerivedValue(() => data.value.label);
  const style = useAnimatedStyle(() => ({
    fontWeight: '500',
    fontSize: 24,
    color: data.value.percentChange > 0 ? 'green' : 'red',
  }));

  return (
    <View style={styles.container}>
      {/* <ETH /> */}
      <View style={styles.values}>
        <View>
          <ReText style={styles.value} text={price} />
          <Text style={styles.label}>{currencyName}</Text>
        </View>
        <View>
          <ReText style={style} text={percentChange} />
          <ReText style={styles.label} text={label} />
        </View>
      </View>
    </View>
  );
};

export default Header;
