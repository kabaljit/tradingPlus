import { PixelRatio } from 'react-native';

import {
  colorPalette as c,
  fontSizePalette as fs,
  fontWeightPalette as fw,
  spacingPalette as sp,
  sizePalette as sz,
} from './palette';
import {
  IFontSizeCollection,
  ISpacingContexts,
  ISizeContexts,
  IFontWeightCollection,
  IColorContexts,
} from './context.models';

const fontSizes: IFontSizeCollection = {
  title: {
    small: fs['18'],
    normal: fs['24'],
    large: fs['32'],
  },
  paragraph: {
    small: fs['12'],
    normal: fs['14'],
    large: fs['16'],
  },
};

const fontWeights: IFontWeightCollection = {
  title: {
    regular: fw['400'],
    medium: fw['600'],
    bold: fw['700'],
  },
  paragraph: {
    regular: fw['400'],
    medium: fw['600'],
    bold: fw['700'],
  },
};

const spacing: ISpacingContexts = {
  element: sp['8'],
  screenEdge: sp['16'],
};

const sizes: ISizeContexts = {
  hairline: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
  formElementHeight: sz['46'],
  formElementIconHeight: sz['34'],
  buttonHeight: sz['55'],
  listItemHeight: sz['55'],
};

/**
 * All colours used in our applications must have a context, this how the colour
 * is used.
 *
 * In your components and screens you should always aim to reference the
 * contextualised colour rather than the palette color.
 */
const customColors: IColorContexts = {
  input: {
    background: {
      default: c.grey[0],
      focused: c.white[0],
      error: c.red[0],
      complete: c.skyBlue[0],
    },
    border: {
      default: c.grey[5],
      focused: c.red[6],
      error: c.red[1],
      complete: c.skyBlue[7],
    },
    label: {
      default: c.grey[5],
      focused: c.grey[5],
      complete: c.grey[5],
      error: c.red[1],
    },
    outerLabel: {
      default: c.midnightBlue[0],
      focused: c.midnightBlue[0],
      complete: c.midnightBlue[0],
      error: c.midnightBlue[0],
    },
    icon: {
      default: c.midnightBlue[0],
      focused: c.midnightBlue[0],
      complete: c.midnightBlue[0],
      error: c.midnightBlue[0],
    },
  },
  actions: {
    background: {
      primary: {
        default: c.red[6],
        focused: '',
        disabled: c.grey[2],
        loading: c.grey[2],
        error: '',
        complete: '',
      },
      secondary: {
        default: 'transparent',
        focused: 'transparent',
        disabled: 'transparent',
        loading: 'transparent',
        error: '',
        complete: '',
      },
      link: {
        default: 'transparent',
        focused: 'transparent',
        disabled: 'transparent',
        loading: 'transparent',
        error: '',
        complete: '',
      },
    },
    foreground: {
      primary: {
        default: c.white[0],
        focused: '',
        error: '',
        complete: '',
        disabled: c.midnightBlue[0],
      },
      secondary: {
        default: c.red[0],
        focused: '',
        error: '',
        complete: '',
        disabled: c.midnightBlue[0],
      },
      link: {
        default: c.red[0],
        focused: '',
        error: '',
        complete: '',
        disabled: c.midnightBlue[0],
      },
    },
  },
  typography: {
    primary: c.midnightBlue[0],
    secondary: c.grey[0],
    tertiary: c.grey[6],
    inverse: c.grey[3],
    link: c.skyBlue[8],
    error: c.red[1],
    white: c.white[0],
    success: c.green[0],
    mango: c.mango[0],
    blue: c.skyBlue[9],
  },
  states: {
    error: {
      default: c.red[0],
      focused: '',
      error: '',
      complete: '',
    },
    loading: {
      default: c.mango[0],
      focused: '',
      error: '',
      complete: '',
    },
  },
};

export default {
  customColors,
  fontSizes,
  fontWeights,
  spacing,
  sizes,
};
