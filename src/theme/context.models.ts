import { ImageSourcePropType } from 'react-native';

import {
  FontSizeValue,
  FontWeightValue,
  SpacingValue,
  SizeValue,
  ColorValue,
} from './palette.models';

export interface IFontSizeCollection {
  title: IFontSizeContexts;
  paragraph: IFontSizeContexts;
}

export interface IFontSizeContexts {
  small: FontSizeValue;
  normal: FontSizeValue;
  large: FontSizeValue;
}

export interface IFontWeightCollection {
  title: IFontWeightContexts;
  paragraph: IFontWeightContexts;
}

export interface IFontWeightContexts {
  regular: FontWeightValue;
  medium: FontWeightValue;
  bold: FontWeightValue;
}

export interface ISpacingContexts {
  element: SpacingValue;
  screenEdge: SpacingValue;
}

export interface ISizeContexts {
  hairline: number;
  formElementHeight: SizeValue;
  formElementIconHeight: SizeValue;
  buttonHeight: SizeValue;
  listItemHeight: SizeValue;
}

export interface IBaseColorContext {
  default: ColorValue;
  focused: ColorValue;
  error: ColorValue;
  complete: ColorValue;
}

export interface IActionColorContext extends IBaseColorContext {
  loading?: ColorValue;
  disabled?: ColorValue;
}

export interface ITypographyColorContext {
  primary: ColorValue;
  secondary: ColorValue;
  tertiary: ColorValue;
  inverse: ColorValue;
  link: ColorValue;
  error: ColorValue;
  white: ColorValue;
  success: ColorValue;
  mango: ColorValue;
  blue: ColorValue;
}

export interface IColorContexts {
  input: {
    background: IBaseColorContext;
    border: IBaseColorContext;
    label: IBaseColorContext;
    outerLabel: IBaseColorContext;
    icon: IBaseColorContext;
  };
  actions: {
    background: {
      primary: IActionColorContext;
      secondary: IActionColorContext;
      link: IActionColorContext;
    };
    foreground: {
      primary: IActionColorContext;
      secondary: IActionColorContext;
      link: IActionColorContext;
    };
  };
  /**
   * Generic error and success states
   */
  states: {
    error: IBaseColorContext;
    loading: IBaseColorContext;
  };
 /**
   * Typographic colours, primary is to be used in most cases such as titles and
   * paragraphs secondary can be used for typographic elements such as subtitles
   * or input descriptions.
   */
  typography: ITypographyColorContext;
}

export interface IImageContextEntry {
  source: ImageSourcePropType;
  size: { width: number; height: number };
}
