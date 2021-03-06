import * as React from 'react';
import {
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
} from 'react-native';

import { ScrollableContent, SafeArea, KeyboardAvoidingView } from '../Layout';
import { Box, ContainerNoPadding } from '../Box';
import theme from '../../theme';

import { SuperScreenProps } from './superScreen.models';

// TODO: Pass style customisations via the style prop instead of having props for flex, justifyContent, etc.
const SuperScreen: React.FunctionComponent<SuperScreenProps> = (props) => {
  const {
    children,
    loading,
    background = 'white',
    statusBarBackground = 'charchoal' as 'charchoal',
    statusBarColor = props.fullscreen ? 'dark-content' : 'light-content',
    keyboardAvoiding = true,
    hasPadding = true,
    justifyContent = 'flex-start',
    flex = 1,
    scrollable = false,
    keyboardVerticalOffset = 0,
    fullscreen,
    enableKeyboardDismiss = false,
  } = props;

  const Wrapper = fullscreen ? ContainerNoPadding : SafeArea;

  const containedChildren = (
    <Box
      spacing={{
        left: hasPadding && 3,
        right: hasPadding && 3,
        top: hasPadding && 3,
        bottom: hasPadding && 3,
      }}
      justifyContent={justifyContent}
      flex={1}
    >
      {children}
    </Box>
  );

  const content = scrollable ? (
    <ScrollableContent>{containedChildren}</ScrollableContent>
  ) : enableKeyboardDismiss ? (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      {containedChildren}
    </TouchableWithoutFeedback>
  ) : (
    containedChildren
  );

  return (
    <Box background={background} flex={flex}>
      <Wrapper>
        <StatusBar
          backgroundColor={
            fullscreen
              ? 'transparent'
              : theme.colors.tradingZ[statusBarBackground]
          }
          barStyle={statusBarColor}
        />
        {keyboardAvoiding ? (
          <KeyboardAvoidingView keyboardVerticalOffset={keyboardVerticalOffset}>
            {content}
          </KeyboardAvoidingView>
        ) : (
          content
        )}
        {loading && <ActivityIndicator />}
      </Wrapper>
    </Box>
  );
};

export default SuperScreen;
