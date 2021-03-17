import { TextProps } from 'react-native';

import { ITypographyColorContext } from '../../theme';

export interface ITypographyProps {
  size?: 'small' | 'medium' | 'large';
  weight?: 'regular' | 'medium' | 'bold';
  align?: 'left' | 'center' | 'right';
  color?: keyof ITypographyColorContext;
  testID?: string;
  selectable?: TextProps['selectable'];
  onPress?: () => void;
}

type Modify<T, R> = Omit<T, keyof R> & R;

export type IParagraphProps = Modify<
  ITypographyProps,
  {
    size?: 'extraSmall' | 'small' | 'medium' | 'large';
  }
> & { numberOfLines?: number };
