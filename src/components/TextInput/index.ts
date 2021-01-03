import { withTheme } from '../../theme/provider/themeProvider';

import { TextInput } from './TextInput';
import type { TextInputProps as TextInputPropsBare } from './TextInput.models';

export {
  FakeInputBorder,
  height as defaultTextInputHeight,
  fontSize as defaultTextInputFontSize,
  labelFontSize as defaultTextInputLabelFontSize,
  helperFontSize as defaultTextInputHelperFontSize,
  helperPaddingVertical as defaultTextInputHelperPaddingVertical,
  helperPaddingHorizontal as defaultTextInputHelperPaddingHorizontal,
  iconSize as defaultTextInputIconSize,
} from './TextInput.styles';

export type TextInputProps = Omit<TextInputPropsBare, 'theme'>;
export default withTheme(TextInput);
