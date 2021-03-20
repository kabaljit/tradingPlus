import { TouchableOpacityProps, GestureResponderEvent } from 'react-native';


export interface BaseButtonProps extends TouchableOpacityProps {
  backgroundColor?: string;
  labelColor?: string;
  accessoryLeft?: () => void;
  accessoryRight?: () => void;
  loading?: boolean;
  rounded?: boolean;
  onPress?: (event?: GestureResponderEvent) => void;
  dismissKeyboard?: boolean;
}
