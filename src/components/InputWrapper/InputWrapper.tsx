import * as React from 'react';

import HelperText from '../HelperText';

import { IInputWrapperProps } from './InputWrapper.models';
import { Wrapper } from './InputWrapper.styles';

export const InputWrapper: React.FunctionComponent<IInputWrapperProps> = ({
  children,
  errorVisible,
  errorMessage,
  shallow,
  info,
  testID = 'input-wrapper-text-testID',
}) => {
  // Ensure that only one child is passed to InputWrapper
  React.Children.only(children);

  // If props.children is not a valid element then immediately return
  if (!React.isValidElement(children)) {
    console.error('The child component passed to InputWrapper is invalid.');
    return <></>;
  }

  // TODO: Seems like we have too many props for showing either an error
  // or helper text. Simplify.
  return (
    <Wrapper shallow={shallow}>
      {React.cloneElement(children, {
        error: errorVisible,
      })}
      <HelperText
        testID={testID}
        type={errorVisible ? 'error' : 'info'}
        visible={!!errorVisible || !!info}
      >
        {(errorVisible && errorMessage) || info || ''}
      </HelperText>
    </Wrapper>
  );
};
