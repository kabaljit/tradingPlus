/* eslint-disable @typescript-eslint/ban-ts-ignore */
import * as React from 'react';
import {
  View,
  Animated,
  Easing,
  TextInput as RNTextInput,
  TextInputFocusEventData,
  NativeSyntheticEvent,
} from 'react-native';

import { TextInputProps, InputStates } from './TextInput.models';
import { Input, InputInner } from './TextInput.styles';
import Label from './Label';
import Wrapper from './Wrapper';
import theme from '../../theme';

export const TextInput = React.forwardRef<RNTextInput, TextInputProps>(
  (props, ref) => {
    const {
      align = 'left',
      value,
      error,
      placeholder,
      dangerouslySetStyles,
      label,
      formatText,
      onChangeText,
      onFocus,
      onBlur,
    } = props;

    const innerRef = ref ?? React.useRef();

    const labelAnimation = React.useMemo(() => new Animated.Value(0), []);
    const baseAnimation = React.useMemo(() => new Animated.Value(0), []);
    const [inputState, setInputState] = React.useState<InputStates>(
      InputStates.DEFAULT
    );

    const triggerErrorState = () => {
      setInputState(InputStates.ERROR);
      labelAnimation.setValue(1);
    };

    React.useEffect(() => {
      if (error) {
        triggerErrorState();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error]);

    // Helper for handling animations in a consistent fashion
    const startAnimation = (animation: any, options: any, callback?: any) => {
      const formattedOptions = {
        duration: 250,
        easing: Easing.ease,
        ...options,
      };
      Animated.timing(animation, formattedOptions).start(callback);
    };

    const startLabelAnimation = () => {
      const options = {
        toValue: inputState === InputStates.FOCUSED ? 0 : 1,
        useNativeDriver: false,
      };
      startAnimation(labelAnimation, options);
    };

    const startBaseAnimation = () => {
      const options = {
        toValue: inputState === InputStates.FOCUSED ? 0 : 1,
        // This is important as we're using this to animate colours, you
        // can't animate colours using the native driver
        useNativeDriver: false,
      };
      startAnimation(baseAnimation, options);
    };

    React.useEffect(() => {
      if (value?.length && !error) {
        setInputState(InputStates.COMPLETE);
        labelAnimation.setValue(1);
      } else if (placeholder) {
        setInputState(InputStates.DEFAULT);
        labelAnimation.setValue(1);
      }
    }, [labelAnimation, placeholder, value]);

    const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setInputState(InputStates.FOCUSED);
      startBaseAnimation();
      !value && startLabelAnimation();
      onFocus?.(e);
    };

    const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      if (props.error) {
        triggerErrorState();
      } else {
        setInputState(
          value?.length ? InputStates.COMPLETE : InputStates.DEFAULT
        );
        !value && !props.placeholder && startLabelAnimation();
      }
      startBaseAnimation();
      onBlur?.(e);
    };

    const handleChangeText = React.useCallback(
      (text: string) => {
        if (formatText) {
          text = formatText(text);
        }

        // @ts-ignore
        innerRef?.current?.setNativeProps({ text });

        onChangeText && onChangeText(text);
      },
      [formatText, onChangeText, innerRef]
    );

    const formattedValue = React.useMemo(
      () => (formatText && value ? formatText(value) : value),
      [value, formatText]
    );

    return (
      <Wrapper
        dangerouslySetStyles={dangerouslySetStyles}
        animation={baseAnimation}
        state={inputState}
      >
        {!!props.accessoryLeft && (
          <View testID="accessory-left">
            {React.cloneElement(props.accessoryLeft, {
              state: inputState,
              animation: baseAnimation,
            })}
          </View>
        )}
        <InputInner>
          {label && (
            <Label
              label={label}
              animation={labelAnimation}
              state={inputState}
            />
          )}
          <Input
            textOnly={!label}
            // @ts-ignore
            ref={innerRef}
            value={formattedValue}
            dangerouslySetStyles={dangerouslySetStyles}
            align={align}
            {
              ...props
              /* Below props need to be hooked to our own definitions for
              TextInput to work properly. If you also want to pass, let's say,
              a custom onChangeText, call it from within the method that handles
              our own logic. */
            }
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={handleChangeText}
            selectionColor={theme.colors.tradingZ.blue}
            textAlignVertical="bottom"
            placeholderTextColor="#C0C0C5"
          />
        </InputInner>
        {!!props.accessoryRight && (
          <View testID="accessory-right">
            {React.cloneElement(props.accessoryRight, {
              state: inputState,
              animation: baseAnimation,
            })}
          </View>
        )}
      </Wrapper>
    );
  }
);
