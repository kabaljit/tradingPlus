import React from 'react';
import renderer from 'react-test-renderer';

import { LoginScreen } from './loginScreen';
import { LoginScreenProps } from './loginScreen.models';

const loginScreenProps: LoginScreenProps = {
};

describe('Given a Login screen, when it is rendered', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<LoginScreen {...loginScreenProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
