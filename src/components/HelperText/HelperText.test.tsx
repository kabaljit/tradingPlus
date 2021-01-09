import React from 'react';
import renderer from 'react-test-renderer';

import { HelperText } from './HelperText';

describe('Given a HelperText', () => {
  describe('when the component is rendered', () => {
    it('should match the snapshot with default values', () => {
      const tree = renderer.create(<HelperText>HELP</HelperText>).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should match the snapshot when not visible', () => {
      const tree = renderer
        .create(<HelperText visible={false}>HELP</HelperText>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should match the snapshot when displaying an error', () => {
      const tree = renderer
        .create(<HelperText type="error">HELP!!!!</HelperText>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
