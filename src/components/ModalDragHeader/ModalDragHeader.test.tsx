import React from 'react';
import renderer from 'react-test-renderer';

import { ModalDragHeader } from '.';

describe('Given a ModalDragHeader', () => {
  describe('when the component is rendered', () => {
    it('should match the snapshot', () => {
      const tree = renderer.create(<ModalDragHeader />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
