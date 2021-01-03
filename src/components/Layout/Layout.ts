import styled from 'styled-components/native';
import { Platform, StyleSheet } from 'react-native';

import theme from '../../theme';

export const ScrollableContent = styled.ScrollView.attrs({
  keyboardShouldPersistTaps: 'handled',
  contentContainerStyle: {
    flexGrow: 1,
  },
})`
  flex: 1;
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : undefined,
})`
  flex: 1;
`;

export const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

export const Divider = styled.View`
  width: 100%;
  height: ${StyleSheet.hairlineWidth}px;
  background-color: ${theme.colorPalette.grey[0]};
  margin-bottom: ${theme.spacing[4]}px;
`;
