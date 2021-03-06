import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

import { defaultTextInputIconSize as defaultTextInputContentHeight } from '../TextInput';
import { P } from '../Typography';
import { scale } from '../../utils/layout';

export const VisibilityButton = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  height: ${defaultTextInputContentHeight}px;
  padding-right: ${scale(16)};
`;

export const VisibilityLabel = styled(P).attrs({
  color: 'link',
})`
  text-transform: capitalize;
`;
