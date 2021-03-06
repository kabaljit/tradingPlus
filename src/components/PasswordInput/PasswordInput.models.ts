import { TextInputProps } from '../TextInput/TextInput.models';

export interface IPasswordInputProps extends TextInputProps {
  onPasswordManagerPress?: () => void;
  passwordManagerExists?: boolean;
  showLabel?: string;
  hideLabel?: string;
  state?: string;
}
