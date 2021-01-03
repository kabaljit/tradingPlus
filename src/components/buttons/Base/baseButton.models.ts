import { TouchableOpacityProps, GestureResponderEvent } from 'react-native';

import { ITheme } from '../../../theme/provider/models';

export interface IBaseButtonProps extends TouchableOpacityProps {
  backgroundColor?: string;
  labelColor?: string;
  accessoryLeft?: () => void;
  accessoryRight?: () => void;
  loading?: boolean;
  rounded?: boolean;
  theme: ITheme;
  onPress?: (event?: GestureResponderEvent) => void;
  dismissKeyboard?: boolean;
}
