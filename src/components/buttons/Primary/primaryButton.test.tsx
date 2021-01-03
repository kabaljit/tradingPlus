import * as React from 'react';
import renderer from 'react-test-renderer';

import { ThemeProvider } from '../../../theme/provider/themeProvider';

import PrimaryButton from '.';

const BASE_PROPS = {
  children: 'primary button',
  testID: 'primary-button-testid',
  disabled: true,
};

describe('Given a PrimaryButton', () => {
  describe('when the component is rendered', () => {
    it('should match the snapshot', () => {
      const tree = renderer
        .create(
          <ThemeProvider>
            <PrimaryButton {...BASE_PROPS} />
          </ThemeProvider>
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
