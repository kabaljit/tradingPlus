import * as React from 'react';

import { BoxProps } from './box.models';
import { BoxView } from './box.styles';

export const Box: React.FunctionComponent<BoxProps> = ({
  children,
  ...propsRest
}) => {
  return <BoxView {...propsRest}>{children}</BoxView>;
};
