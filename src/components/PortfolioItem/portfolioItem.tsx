import * as React from 'react';

import { P } from '../Typography';
import { Box } from '../Box';

import { PortfolioItemProps } from './portfolioItem.models';
import { PortfolioItemView } from './portfolioItem.styles';
import { i18n } from './portfolioItem.i18n';

export const PortfolioItem: React.FunctionComponent<PortfolioItemProps> = ({
  title,
  currentValue,
  amount,
}) => {
  return (
    <PortfolioItemView>
      <Box>
        <P>{title}</P>
        <P>{amount}</P>
        <P>{currentValue}</P>
      </Box>
    </PortfolioItemView>
  );
};
