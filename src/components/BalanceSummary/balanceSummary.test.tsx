import React from 'react';
import renderer from 'react-test-renderer';

import { BalanceSummary } from './balanceSummary';
import { BalanceSummaryProps } from './balanceSummary.models';

const props: BalanceSummaryProps = {

};

describe('Given a BalanceSummary component, when it is rendered', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<BalanceSummary {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
