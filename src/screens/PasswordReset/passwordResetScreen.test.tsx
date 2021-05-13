import React from 'react';
import renderer from 'react-test-renderer';

import { PasswordResetScreen } from './passwordResetScreen';
import { PasswordResetScreenProps } from './passwordResetScreen.models';

const passwordResetScreenProps: PasswordResetScreenProps = {
};

describe('Given a PasswordReset screen, when it is rendered', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<PasswordResetScreen {...passwordResetScreenProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
