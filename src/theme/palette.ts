import _ from 'lodash';

import { hp } from '../utils/layout';

import { colorPalette } from './colorPalette';

const designScreenHeight = 675; // Obtained from Figma.

const calculateScaledSize = (designSize: number) =>
  hp(designSize / designScreenHeight);

function scaleObjectValues<T extends { [key: string]: number }>(obj: T): T {
  return _.mapValues(obj, (v) => calculateScaledSize(v)) as T;
}

export const fontSizePalette = scaleObjectValues({
  11: 11, // Default tab title size for iOS
  12: 12,
  14: 14, // Default paragraph size for iOS
  16: 16,
  18: 18,
  24: 24,
  32: 32,
});

export const fontWeightPalette = {
  // These need to be strings for easy assignment to both StyleSheet and styled-components definitions.
  400: '400',
  600: '600',
  700: '700',
};

export const spacingPalette = scaleObjectValues({
  8: 8, // Default spacing between elements for iOS
  16: 16, // Default screen padding for iOS
});

export const sizePalette = scaleObjectValues({
  // TODO: Switch to saner sizes
  34: 34,
  46: 46,
  55: 55,
});

export { colorPalette };
