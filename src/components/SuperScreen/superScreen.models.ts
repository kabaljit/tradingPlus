import { ColorPalette } from '../../theme/palette.models';

export interface SuperScreenProps {
  keyboardAvoiding?: boolean;
  statusBarColor?: 'light-content' | 'dark-content';
  background?: keyof ColorPalette;
  /**
   * Header offset for keyboard avoiding view which causes the button
   * to be behind the keyboard.
   *
   * Can't set a default header offset right now as we use different versions of
   * React Navigation which have different API's.
   */
  keyboardVerticalOffset?: number;
  statusBarBackground?: keyof ColorPalette;
  loading?: boolean;
  /**
   * SuperScreen content is always within device safe area unless this prop
   * is set to `true`.
   */
  fullscreen?: boolean;
  scrollable?: boolean;
  hasPadding?: boolean;
  justifyContent?: 'space-between' | 'flex-start';
  flex?: number;
}
