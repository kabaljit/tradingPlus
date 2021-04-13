import React from 'react';
import { Animated, LayoutChangeEvent } from 'react-native';

import { scale } from '../../utils/layout';
import theme from '../../theme';

import { StyledLabel } from './TextInput.styles';

interface ILabelProps {
  label: string;
  animation: any;
  state: 'error' | 'default' | 'focused' | 'complete';
}

const Label = ({ label, animation, state }: ILabelProps) => {
  const [layout, setLayout] = React.useState({ width: 0, height: 0 });

  const labelScale = 0.75; // desiired font-size / font-size
  const labelWidth = layout.width;
  const labelHeight = layout.height;
  const labelHalfWidth = labelWidth / 2;
  const labelHalfHeight = labelHeight / 2;

  // This is the equivilant of transform-origin in the web. Proceed with caution.
  const baseLabelTranslateX =
    -1 * (labelHalfWidth - (labelScale * labelWidth) / 2) +
    (1 - labelScale) * scale(18);

  const baseLabelTranslateY = -labelHalfHeight - 10;

  const containerStyle = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, baseLabelTranslateY],
        }),
      },
      {
        translateX: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, baseLabelTranslateX],
        }),
      },
      {
        scale: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [1, labelScale],
        }),
      },
    ],
  };

  const labelStyles = {
    color: animation.interpolate({
      inputRange: [0, 1],

      // TODO: UPDATE THE COLOR FOR EACH STATE input.label[state]],
      outputRange: [theme.colors.tradingZ.white, theme.colors.tradingZ.success],
    }),
  };

  return (
    <Animated.View
      onLayout={({ nativeEvent: { layout: newLayout } }: LayoutChangeEvent) =>
        setLayout(newLayout)
      }
      style={containerStyle}
    >
      <StyledLabel style={labelStyles}>{label}</StyledLabel>
    </Animated.View>
  );
};

export default Label;
