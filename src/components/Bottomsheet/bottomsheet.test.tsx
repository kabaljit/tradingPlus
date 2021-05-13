import React from 'react';
import renderer from 'react-test-renderer';

import { Bottomsheet } from './bottomsheet';
import { BottomsheetProps } from './bottomsheet.models';

const props: BottomsheetProps = {};

describe('Given a Bottomsheet component, when it is rendered', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<Bottomsheet {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
