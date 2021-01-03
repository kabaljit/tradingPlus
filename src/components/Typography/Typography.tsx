import { StyleProp, Text, TextStyle } from 'react-native';
import React from 'react';
import { Platform } from 'react-native';

import { ITypographyProps, IParagraphProps } from './typography.models';
import { titleSizes, fontWeight, paragraphSizes } from './mappings';

const determineLineHeight = (fontSize: number) => 1.4 * fontSize;

export const fontFamily = Platform.OS === 'android' ? 'roboto' : 'System';

export const Title: React.FunctionComponent<ITypographyProps> = ({
  size = 'medium',
  theme,
  color = 'primary',
  align = 'left',
  weight = 'bold',
  selectable = false,
  children,
}) => (
  <Text
    style={
      {
        fontSize: titleSizes[size],
        lineHeight: determineLineHeight(titleSizes[size]),
        color: theme?.context.colors.typography[color],
        textAlign: align,
        fontWeight: fontWeight[weight],
        fontFamily: fontFamily,
      } as StyleProp<TextStyle>
    }
    selectable={selectable}
  >
    {children}
  </Text>
);

export const Paragraph: React.FunctionComponent<IParagraphProps> = ({
  size = 'medium',
  theme,
  color = 'primary',
  align = 'left',
  weight = 'regular',
  selectable = false,
  onPress,
  children,
}) => (
  <Text
    style={
      {
        fontSize: paragraphSizes[size],
        lineHeight: determineLineHeight(paragraphSizes[size]),
        fontWeight: fontWeight[weight],
        color: theme?.context.colors.typography[color],
        textAlign: align,
        fontFamily: fontFamily,
      } as StyleProp<TextStyle>
    }
    selectable={selectable}
    onPress={onPress}
  >
    {children}
  </Text>
);
