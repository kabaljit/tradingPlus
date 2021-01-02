import {
  colorPalette,
  fontSizePalette,
  fontWeightPalette,
  spacingPalette,
  sizePalette,
} from './palette';

export type ColorPalette = typeof colorPalette;
type ColorTones = ColorPalette[keyof ColorPalette];
export type ColorValue = ColorTones[0];

type FontSizePalette = typeof fontSizePalette;
export type FontSizeValue = FontSizePalette[keyof FontSizePalette];

type FontWeightPalette = typeof fontWeightPalette;
export type FontWeightValue = FontWeightPalette[keyof FontWeightPalette];

type SpacingPalette = typeof spacingPalette;
export type SpacingValue = SpacingPalette[keyof SpacingPalette];

type SizePalette = typeof sizePalette;
export type SizeValue = SizePalette[keyof SizePalette];
