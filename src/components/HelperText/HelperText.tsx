import * as React from 'react';

import { IHelperTextProps } from './HelperText.models';
import { HelperTextView, HelperTextText } from './HelperText.styles';

export const HelperText: React.FunctionComponent<IHelperTextProps> = (
  props
) => {
  const { children, ...propsRest } = props;
  return (
    <HelperTextView>
      <HelperTextText {...propsRest}>{children}</HelperTextText>
    </HelperTextView>
  );
};
