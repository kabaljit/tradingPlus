import { TextInputProps as RNTextInputProps } from 'react-native';
import { ReactElement } from 'react';

import theme from '../../theme';

export interface TextInputProps extends RNTextInputProps {
  accessoryLeft?: ReactElement<any>;
  accessoryRight?: ReactElement<any>;
  label?: string;
  error?: boolean;
  formatText?: (text: string) => string;
  dangerouslySetStyles?: IdangerouslySetFontStyles & IdangerouslySetInputStyles;
  align?: 'left' | 'right';
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
    fontWeight?: keyof typeof theme.fontWeights;
  };
}

export enum InputStates {
  DEFAULT = 'default',
  FOCUSED = 'focused',
  ERROR = 'error',
  COMPLETE = 'complete',
}
