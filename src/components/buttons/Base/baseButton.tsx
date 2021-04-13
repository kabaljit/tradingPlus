import React from 'react';
import {
  ActivityIndicator,
  GestureResponderEvent,
  Keyboard,
} from 'react-native';

import { Button, Label, Inner } from './baseButton.styles';
import { BaseButtonProps } from './baseButton.models';

const BaseButton: React.FunctionComponent<BaseButtonProps> = ({
  children,
  accessoryRight,
  accessoryLeft,
  backgroundColor,
  labelColor,
  testID = 'default-button-testid',
  loading,
  disabled,
  onPress,
  dismissKeyboard = true,
  ...rest
}) => {
  const buttonLabelTestID = `${testID}-label`;

  return (
    <Button
      testID={testID}
      backgroundColor={backgroundColor}
      disabled={disabled || loading}
      onPress={(event: GestureResponderEvent) => {
        dismissKeyboard && Keyboard.dismiss();
        onPress && onPress(event);
      }}
      {...rest}
    >
      {!!accessoryLeft || !!accessoryRight ? (
        <Inner>
          {!!accessoryLeft && !loading && accessoryLeft()}
          {loading ? (
            <ActivityIndicator testID="activityIndicator" color={labelColor} />
          ) : (
            <Label
              testID={buttonLabelTestID}
              labelColor={labelColor}
              disabled={disabled}
            >
              {children}
            </Label>
          )}
          {!!accessoryRight && !loading && accessoryRight()}
        </Inner>
      ) : (
        <>
          {loading ? (
            <ActivityIndicator testID="activityIndicator" color={labelColor} />
          ) : (
            <Label
              testID={buttonLabelTestID}
              labelColor={labelColor}
              disabled={disabled}
            >
              {children}
            </Label>
          )}
        </>
      )}
    </Button>
  );
};

export { BaseButton };
