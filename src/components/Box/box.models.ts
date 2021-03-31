import { ViewStyle } from 'react-native';
import theme from '../../theme';



/**
 * True for standard element spacing, false or undefined for no spacing.
 *
 * Standard element spacing is theme.spacing[1].
 *
 * If given a number it will be used as the index of spacing to use from
 * theme.spacing.
 */
type PaddingProp = boolean | number;

export interface BoxSpacing {
  left?: PaddingProp;
  right?: PaddingProp;
  top?: PaddingProp;
  bottom?: PaddingProp;
}

export interface BoxProps {
  spacing?: BoxSpacing;
  flex?: ViewStyle['flex'];
  flexDirection?: ViewStyle['flexDirection'];
  justifyContent?: ViewStyle['justifyContent'];
  alignItems?: ViewStyle['alignItems'];
  background?: string; //TODO: Change the type to theme colors 
}

export const rowSpacing = {
  extraSmall: 1,
  small: 3,
  medium: 5,
  large: 7,
};
