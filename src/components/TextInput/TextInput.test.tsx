import React from 'react';
import renderer from 'react-test-renderer';

import { ThemeProvider } from '../../theme/provider/themeProvider';

import TextInput from '.';

describe('Given a TextInput', () => {
  describe('when the component is rendered', () => {
    it('should match the snapshot', () => {
      const tree = renderer
        .create(
          <ThemeProvider>
            <TextInput value="this is a test" />
          </ThemeProvider>
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});

describe('Given a multi-line TextInput', () => {
  describe('when the component is rendered', () => {
    it('should match the snapshot', () => {
      const tree = renderer
        .create(
          <ThemeProvider>
            <TextInput multiline={true} value="this is a test" />
          </ThemeProvider>
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
