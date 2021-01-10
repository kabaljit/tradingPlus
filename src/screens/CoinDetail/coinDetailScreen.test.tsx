import React from 'react';
import renderer from 'react-test-renderer';

import { CoinDetailScreen } from './coinDetailScreen';
import { CoinDetailScreenProps } from './coinDetailScreen.models';

const coinDetailScreenProps: CoinDetailScreenProps = {
};

describe('Given a CoinDetail screen, when it is rendered', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<CoinDetailScreen {...coinDetailScreenProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
