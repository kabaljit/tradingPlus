import { PixelRatio, Dimensions } from 'react-native';

import { scale } from '../utils/layout';

import context from './context';
import { colorPalette } from './palette';

export const DEVICE_HEIGHT = Dimensions.get('window').height;
export const DEVICE_WIDTH = Dimensions.get('window').width;

export const setHeightInPercent = (percent: number) =>
  (DEVICE_HEIGHT * percent) / 100;
export const setWidthInPercent = (percent: number) =>
  (DEVICE_WIDTH * percent) / 100;

/**
 * @deprecated do not use colors, instead use the context file
 */
const colors = {
  trade: {
    mango: '#FFB900',
    charcoal: '#262835',
    white: '#ffffff',
    teal: '#00828E',
    lightSilver: '#F1F3F6',
    silver: '#f5f6f4',
    darkSilver: '#E3E6E6',
    iris: '#6C6C9B',
    irisLight: '#B9B9CC',
    irisDisabled: '#DEDEE9',
    lightCharcoal: '#303344',
    lightLilac: '#ABBCD1',
    success: '#1EDC8C',
    error: '#F5635D',
    grey: '#8C8C97',
    grayishNavy: '#404052',
    lightGrey: '#848692',
    greenSuccess: '#0CB46D',
    textInputGrey: '#F0F0F0',
    cardScreenBg: '#454757',
    pictonBlue: '#4C97E8',
    ivory: '#F5F5F4',
    blue: '#3871C2',
    transparent: 'transparent',
  },
  native: {
    // Add platform native colors
    ios: {
      blue: '#007aff',
    },
  },
  // New colors
  background: {
    input: '#F7F7FC',
  },
};

const fontSizes = {
  fs10: scale(10),
  fs12: scale(12),
  fs14: scale(14),
  fs16: scale(16),
  fs18: scale(18),
  fs20: scale(20),
  fs24: scale(24),
  fs28: scale(28),
  fs32: scale(32),
  fs36: scale(36),
  fs40: scale(40),
  fs48: scale(48),
  fs64: scale(64),
};

// These need to be strings for easy assignment to both StyleSheet and styled-components definitions.
const fontWeights = {
  fw400: '400',
  fw600: '600',
  fw700: '700',
};


const spacing = [
  scale(4),
  scale(8),
  scale(12),
  scale(16),
  scale(20),
  scale(24),
  scale(28),
  scale(32),
  scale(36),
  scale(40),
  scale(44),
  scale(48),
];

const hairlineBorderWidth = 1 / PixelRatio.getPixelSizeForLayoutSize(1);

const borders = {
  buttonRadius: 0,
  hairlineWidth: hairlineBorderWidth,
  separatorWidth: hairlineBorderWidth,
};

const theme = {
  colors,
  fontSizes,
  fontWeights,
  spacing,
  borders,
  context,
  colorPalette,
};

export default theme;
export type { color } from './theme.models';
export type { ITypographyColorContext } from './context.models';
