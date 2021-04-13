import React from 'react';
import renderer from 'react-test-renderer';

import { DetailScreen } from './detailScreen';
import { DetailScreenProps } from './detailScreen.models';

const detailScreenProps: DetailScreenProps = {
};

describe('Given a Detail screen, when it is rendered', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<DetailScreen {...detailScreenProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
