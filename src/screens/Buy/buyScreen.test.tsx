import React from 'react';
import renderer from 'react-test-renderer';

import { BuyScreen } from './buyScreen';
import { BuyScreenProps } from './buyScreen.models';

const buyScreenProps: BuyScreenProps = {
};

describe('Given a Buy screen, when it is rendered', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<BuyScreen {...buyScreenProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
