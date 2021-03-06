import React from 'react';
import renderer from 'react-test-renderer';

import { ThemeProvider } from '../../theme/provider/themeProvider';

import PasswordInput from '.';

describe('Given a PasswordInput', () => {
  describe('when the component is rendered', () => {
    it('should match the snapshot', () => {
      const tree = renderer
        .create(
          <ThemeProvider>
            <PasswordInput />
          </ThemeProvider>
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
