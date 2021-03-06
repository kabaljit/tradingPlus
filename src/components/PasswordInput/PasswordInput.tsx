import * as React from 'react';
import { TextInput as RNTextInput } from 'react-native';

import TextInput from '../TextInput';

import { VisibilityButton, VisibilityLabel } from './PasswordInput.styles';
import { IPasswordInputProps } from './PasswordInput.models';

export const PasswordInput = React.forwardRef<RNTextInput, IPasswordInputProps>(
  (props, ref) => {
    const { showLabel, hideLabel } = props;

    const [passwordVisible, setPasswordVisibility] = React.useState(false);

    return (
      <TextInput
        ref={ref}
        secureTextEntry={!passwordVisible}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="go"
        accessoryRight={
          <VisibilityButton
            onPress={() => setPasswordVisibility(!passwordVisible)}
          >
            <VisibilityLabel
              testID={passwordVisible ? 'hide-password' : 'show-password'}
              color="link"
            >
              {passwordVisible
                ? hideLabel
                  ? hideLabel
                  : 'Hide'
                : showLabel
                ? showLabel
                : 'Show'}
            </VisibilityLabel>
          </VisibilityButton>
        }
        {...props}
      />
    );
  }
);
