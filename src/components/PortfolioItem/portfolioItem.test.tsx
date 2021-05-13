import React from 'react';
import renderer from 'react-test-renderer';

import { PortfolioItem } from './portfolioItem';
import { PortfolioItemProps } from './portfolioItem.models';

const props: PortfolioItemProps = {};

describe('Given a PortfolioItem component, when it is rendered', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<PortfolioItem {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
