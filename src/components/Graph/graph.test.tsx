import React from 'react';
import renderer from 'react-test-renderer';

import { Graph } from './graph';
import { GraphProps } from './graph.models';

const props: GraphProps = {};

describe('Given a Graph component, when it is rendered', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<Graph {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
