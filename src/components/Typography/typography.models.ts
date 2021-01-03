import { TextProps } from 'react-native';

import { ITheme } from '../../theme/provider/models';
import { ITypographyColorContext } from '../../theme/context.models';

export interface ITypographyProps {
  size?: 'small' | 'medium' | 'large';
  weight?: 'regular' | 'medium' | 'bold';
  align?: 'left' | 'center' | 'right';
  color?: keyof ITypographyColorContext;
  theme: ITheme;
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
