import React from 'react';
import renderer from 'react-test-renderer';

import { MarketScreen } from './marketScreen';
import { MarketScreenProps } from './marketScreen.models';

const marketScreenProps: MarketScreenProps = {
};

describe('Given a Market screen, when it is rendered', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<MarketScreen {...marketScreenProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
