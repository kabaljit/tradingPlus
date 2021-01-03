import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

import { scale } from '../../../utils/layout';
import { ITheme } from '../../../theme/provider/models';
import { fontFamily } from '../../Typography/Typography';

const determineBackgroundColor = (theme: ITheme, disabled: boolean) => {
  if (disabled) {
    return theme.context.colors.actions.background.primary.disabled;
  }

  return theme.context.colors.actions.background.primary.default;
};

const determineLabelColor = (theme: ITheme, disabled: boolean) => {
  if (disabled) {
    return theme.context.colors.actions.foreground.primary.disabled;
  }

  return theme.context.colors.actions.foreground.primary.default;
};

export const Button = styled(TouchableOpacity)<{
  backgroundColor?: string;
  theme: ITheme;
  rounded?: boolean;
}>`
  background-color: ${(p) =>
    p.backgroundColor || determineBackgroundColor(p.theme, !!p.disabled)};
  height: ${scale(56)}px;
  border-radius: ${(p) => (p.rounded ? scale(28) : 0)}px;
  justify-content: center;
`;

export const Label = styled.Text<{
  labelColor?: string;
  theme: ITheme;
  disabled?: boolean | null;
}>`
  font-family: ${fontFamily};
  font-size: ${scale(16)}px;
  text-align: center;
  font-weight: 500;
  color: ${(p) => p.labelColor || determineLabelColor(p.theme, !!p.disabled)};
`;

export const Inner = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
