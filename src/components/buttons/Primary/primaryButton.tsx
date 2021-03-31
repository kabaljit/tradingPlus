import React from 'react';

import theme from '../../../theme';
import Button from '../Base';

import { IPrimaryButton } from './primaryButton.models';

const PrimaryButton: React.FunctionComponent<IPrimaryButton> = ({
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
        ? theme.colors.tradingZ.blue
        : theme.colors.tradingZ.success
    }
    disabled={disabled || loading}
    loading={loading}
    {...rest}
  >
    {children}
  </Button>
);

export { PrimaryButton };
