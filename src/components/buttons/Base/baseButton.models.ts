import { TouchableOpacityProps, GestureResponderEvent } from 'react-native';

import theme from '../../../theme';

export interface BaseButtonProps extends TouchableOpacityProps {
  backgroundColor?: keyof typeof theme.colors.tradingZ;
  labelColor?: string;
  accessoryLeft?: () => void;
  accessoryRight?: () => void;
  loading?: boolean;
  rounded?: boolean;
  onPress?: (event?: GestureResponderEvent) => void;
  dismissKeyboard?: boolean;
}
