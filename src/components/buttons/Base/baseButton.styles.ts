import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

import { scale } from '../../../utils/layout';
import { fontFamily } from '../../Typography/Typography';
import theme from '../../../theme';

//TODO: CHANGE THE BUTTON COLORS, not using this functions
const determineBackgroundColor = (disabled: boolean) => {
  if (disabled) {
    return theme.colors.tradingZ.white;
  }

  return theme.colors.tradingZ.white;
};

//TODO: Use the function to determine the color
const determineLabelColor = (disabled: boolean) => {
  if (disabled) {
    return theme.colors.tradingZ.white;
  }

  return theme.colors.tradingZ.white;
};

export const Button = styled(TouchableOpacity)<{
  rounded?: boolean;
}>`
  height: ${scale(56)}px;
  border-radius: ${(p) => (p.rounded ? scale(28) : 0)}px;
  justify-content: center;
`;

export const Label = styled.Text<{
  labelColor?: string;
  disabled?: boolean | null;
}>`
  font-family: ${fontFamily};
  font-size: ${scale(16)}px;
  text-align: center;
  font-weight: 500;
  color: ${(p) => p.labelColor};
`;

export const Inner = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
