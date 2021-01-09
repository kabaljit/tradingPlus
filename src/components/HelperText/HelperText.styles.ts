import styled from 'styled-components/native';

import theme from '../../theme';
import {
  defaultTextInputHelperPaddingVertical,
  defaultTextInputHelperPaddingHorizontal,
  defaultTextInputHelperFontSize,
} from '../TextInput';

import { IHelperTextProps } from './HelperText.models';

const getColor = (props: IHelperTextProps) => {
  const visible = props.visible === true || props.visible === undefined;
  if (!visible) return 'transparent';
  return props.type === 'error'
    ? theme.context.customColors.input.border.error
    : theme.context.customColors.input.border.default
};

export const HelperTextView = styled.View`
  height: ${defaultTextInputHelperFontSize +
  defaultTextInputHelperPaddingVertical * 2}px;
`;

// TODO: Find a better name. Possibly the component itself shouldn't be HelperText to avoid confusion.
export const HelperTextText = styled.Text<IHelperTextProps>`
  padding-vertical: ${defaultTextInputHelperPaddingVertical}px;
  padding-horizontal: ${defaultTextInputHelperPaddingHorizontal}px;
  font-size: ${defaultTextInputHelperFontSize}px;
  color: ${getColor};
`;
