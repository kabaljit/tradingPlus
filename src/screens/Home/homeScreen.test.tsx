import React from 'react';
import renderer from 'react-test-renderer';

import { HomeScreen } from './homeScreen';
import { HomeScreenProps } from './homeScreen.models';

const homeScreenProps: HomeScreenProps = {};

describe('Given a Home screen, when it is rendered', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<HomeScreen {...homeScreenProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
