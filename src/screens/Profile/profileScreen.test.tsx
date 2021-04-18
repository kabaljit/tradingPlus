import React from 'react';
import renderer from 'react-test-renderer';

import { ProfileScreen } from './profileScreen';
import { ProfileScreenProps } from './profileScreen.models';

const profileScreenProps: ProfileScreenProps = {
};

describe('Given a Profile screen, when it is rendered', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<ProfileScreen {...profileScreenProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
