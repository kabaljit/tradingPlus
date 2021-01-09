import React from 'react';
import renderer from 'react-test-renderer';

import { RegistrationScreen } from './registrationScreen';
import { RegistrationScreenProps } from './registrationScreen.models';

const registrationScreenProps: RegistrationScreenProps = {
};

describe('Given a Registration screen, when it is rendered', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<RegistrationScreen {...registrationScreenProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
