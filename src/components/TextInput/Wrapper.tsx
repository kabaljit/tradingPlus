import React from 'react';
import { Animated } from 'react-native';

import { ITheme } from '../../theme/provider/models';
import { withTheme } from '../../theme/provider/themeProvider';

import {
  AnimatedBackground,
  AnimatedBorder,
  InnerRow,
} from './TextInput.styles';
import { IdangerouslySetInputStyles } from './TextInput.models';

interface IWrapperProps {
  animation: Animated.AnimatedValue;
  state: 'default' | 'focused' | 'error' | 'complete';
  dangerouslySetStyles?: IdangerouslySetInputStyles;
  theme: ITheme;
}

const Wrapper: React.FunctionComponent<IWrapperProps> = ({
  children,
  animation,
  state,
  dangerouslySetStyles,
  theme,
}) => {
  const {
    context: {
      colors: { input },
    },
  } = theme;

  const animatedStyles = {
    backgroundColor: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [input.background[state], input.background.focused],
    }),
  };

  const animatedBorderStyles = {
    backgroundColor: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [input.border[state], input.border.focused],
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

export default withTheme(Wrapper);
