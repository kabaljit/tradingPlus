import React from 'react';
import renderer from 'react-test-renderer';

import { SettingsScreen } from './settingsScreen';
import { SettingsScreenProps } from './settingsScreen.models';

const settingsScreenProps: SettingsScreenProps = {
};

describe('Given a Settings screen, when it is rendered', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<SettingsScreen {...settingsScreenProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
