import { TextInputProps as RNTextInputProps } from 'react-native';
import { ReactElement } from 'react';

import { ITheme } from '../../theme/provider/models';
import { FontWeightValue } from '../../theme/palette.models';

export interface TextInputProps extends RNTextInputProps {
  accessoryLeft?: ReactElement<any>;
  accessoryRight?: ReactElement<any>;
  label?: string;
  error?: boolean;
  formatText?: (text: string) => string;
  dangerouslySetStyles?: IdangerouslySetFontStyles & IdangerouslySetInputStyles;
  align?: 'left' | 'right';
  theme: ITheme;
  backgroundColor?: string;
}

export interface IdangerouslySetInputStyles {
  input?: {
    minHeight?: number;
    paddingTop?: number;
    lineHeight?: number;
  };
}

export interface IdangerouslySetFontStyles {
  font?: {
    size: number;
    fontWeight?: FontWeightValue;
  };
}

export enum InputStates {
  DEFAULT = 'default',
  FOCUSED = 'focused',
  ERROR = 'error',
  COMPLETE = 'complete',
}
