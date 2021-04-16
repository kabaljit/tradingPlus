import styled from 'styled-components/native';
import { Animated } from 'react-native';

import theme from '../../theme';
import { paragraphSizes } from '../Typography/mappings';
import { scale } from '../../utils/layout';

import {
  IdangerouslySetFontStyles,
  IdangerouslySetInputStyles,
} from './TextInput.models';

// TODO: When refactoring theme to include contextual sizes,
// move these in there.
export const height = scale(59);
export const fontSize = paragraphSizes.medium;
export const labelFontSize = paragraphSizes.small;
export const helperFontSize = paragraphSizes.extraSmall;
export const helperPaddingVertical = theme.spacing[1];
export const helperPaddingHorizontal = theme.spacing[1];
export const iconSize = height * 0.75;

const borderColorForState = (isError: boolean, isActive: boolean) => {
  if (isError) return theme.colors.tradingZ.error;
  if (isActive) return theme.colors.tradingZ.darkSilver;
  return theme.colors.tradingZ.charcoal;
};

export const FakeInputBorder = styled.View<{
  active?: boolean;
  error?: boolean;
}>`
  position: absolute;
  bottom: ${(props) => (props.active ? 0 : 0.5)}px;
  left: 0;
  right: 0;
  background-color: ${(p) => borderColorForState(!!p.error, !!p.active)};
  height: ${(props) => (props.active ? 2 : 1)}px;
`;

// New

export const AnimatedBackground = styled(Animated.View)<{ minHeight?: number }>`
  position: relative;
  background-color: ${theme.colors.tradingZ.charcoal};
  min-height: ${(p) => p.minHeight || scale(56)}px;
`;

export const InnerRow = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
`;

export const AnimatedBorder = styled(Animated.View)`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${scale(1)}px;
`;

export const InputInner = styled.View`
  position: relative;
  flex: 1;
`;

export const Input = styled.TextInput<{
  textOnly?: boolean;
  dangerouslySetStyles?: IdangerouslySetFontStyles & IdangerouslySetInputStyles;
  align: 'left' | 'right';
  backgroundColor: string;
}>`
  min-height: ${(p) => p.dangerouslySetStyles?.input?.minHeight || scale(56)}px;
  font-size: ${(p) => p.dangerouslySetStyles?.font?.size || scale(16)}px;
  color: ${theme.colors.tradingZ.white};
  background-color: ${(p) => p.backgroundColor ?? 'transparent'};
  padding-left: ${scale(17)}px;
  line-height: ${(p) =>
    p.dangerouslySetStyles?.input?.lineHeight ||
    (p.dangerouslySetStyles?.font && p.dangerouslySetStyles.font.size * 1.18) ||
    scale(19)}px;
  text-align: ${(p) => p.align};
  font-weight: ${(p) => p.dangerouslySetStyles?.font?.fontWeight || 'normal'}
    ${(p) =>
      p.dangerouslySetStyles?.input?.paddingTop &&
      `padding-top: ${p.dangerouslySetStyles?.input?.paddingTop}`}px;
  ${(p) => !p.textOnly && `padding-top: ${scale(12)}px;`}
  ${(p) =>
    p.multiline &&
    `
    padding-top: ${scale(23)}px;
    padding-bottom: ${scale(10)}px
  `};
`;

export const StyledLabel = styled(Animated.Text)`
  position: absolute;
  /* (HEIGHT / 2) - (FONT_SIZE / 2) */
  top: ${scale(20)}px;
  font-size: ${scale(16)}px;
  line-height: ${scale(16)}px;
  left: ${scale(16)};
`;

export const RightAccessoryWrapper = styled.View`
  padding-right: ${scale(16)}px;
`;

export const LeftAccessoryWrapper = styled.View`
  padding-left: ${scale(16)}px;
`;
