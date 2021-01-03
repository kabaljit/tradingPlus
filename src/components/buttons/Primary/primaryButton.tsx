import React from 'react';

import Button from '../Base';

import { IPrimaryButton } from './primaryButton.models';

const PrimaryButton: React.FunctionComponent<IPrimaryButton> = ({
  children,
  disabled,
  testID,
  loading,
  theme,
  ...rest
}) => (
  <Button
    testID={testID}
    labelColor={
      disabled || loading
        ? theme.context.colors.actions.foreground.primary.disabled
        : theme.context.colors.actions.foreground.primary.default
    }
    disabled={disabled || loading}
    loading={loading}
    {...rest}
  >
    {children}
  </Button>
);

export { PrimaryButton };
