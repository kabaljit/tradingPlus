import React from 'react';

import theme from '../../../theme';
import Button from '../Base';

import { PrimaryButtonProps } from './primaryButton.models';

const PrimaryButton: React.FunctionComponent<PrimaryButtonProps> = ({
  children,
  disabled,
  testID,
  loading,
  ...rest
}) => (
  <Button
    testID={testID}
    labelColor={
      disabled || loading
        ? theme.colors.tradingZ.lightGrey
        : theme.colors.tradingZ.charcoal
    }
    disabled={disabled || loading}
    loading={loading}
    backgroundColor="white"
    {...rest}
  >
    {children}
  </Button>
);

export { PrimaryButton };
