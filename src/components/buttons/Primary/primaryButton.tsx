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
        : theme.colors.tradingZ.black
    }
    disabled={disabled || loading}
    loading={loading}
    backgroundColor={theme.colors.tradingZ.white}
    {...rest}
  >
    {children}
  </Button>
);

export { PrimaryButton };
