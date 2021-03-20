import React from 'react';
import { Animated } from 'react-native';

import {
  AnimatedBackground,
  AnimatedBorder,
  InnerRow,
} from './TextInput.styles';
import { IdangerouslySetInputStyles } from './TextInput.models';
import theme from '../../theme';

interface IWrapperProps {
  animation: Animated.AnimatedValue;
  state: 'default' | 'focused' | 'error' | 'complete';
  dangerouslySetStyles?: IdangerouslySetInputStyles;
}

const Wrapper: React.FunctionComponent<IWrapperProps> = ({
  children,
  animation,
  state,
  dangerouslySetStyles,
}) => {
  const animatedStyles = {
    backgroundColor: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [
        theme.colors.tradingZ.transparent,
        theme.colors.tradingZ.charcoal,
      ],
    }),
  };

  const animatedBorderStyles = {
    backgroundColor: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [
        theme.colors.tradingZ.lightGrey,
        theme.colors.tradingZ.white,
      ],
    }),
  };

  return (
    <AnimatedBackground
      minHeight={dangerouslySetStyles?.input?.minHeight}
      style={animatedStyles}
    >
      <InnerRow>{children}</InnerRow>
      <AnimatedBorder style={animatedBorderStyles} />
    </AnimatedBackground>
  );
};

export default Wrapper;
