import * as React from 'react';

import { useTheme } from '../../theme/provider/themeProvider';

import { BoxProps } from './box.models';
import { BoxView } from './box.styles';

export const Box: React.FunctionComponent<BoxProps> = ({
  children,
  ...propsRest
}) => {
  const theme = useTheme();
  return (
    <BoxView theme={theme} {...propsRest}>
      {children}
    </BoxView>
  );
};
