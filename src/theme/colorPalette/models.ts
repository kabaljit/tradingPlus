import {  nestedColorPalette, } from './index';

export type ColorPalette = typeof nestedColorPalette;

export type ColorTones = ColorPalette[keyof ColorPalette];

export type ColorValue = ColorTones[0];