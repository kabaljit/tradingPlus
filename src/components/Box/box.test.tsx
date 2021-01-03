import React from 'react';
import renderer from 'react-test-renderer';
import { Text } from 'react-native';

import { Box } from './box';

describe('Given a Box component, when it is rendered', () => {
  it('should match the snapshot when bare', () => {
    const tree = renderer.create(<Box />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should match the snapshot when with child', () => {
    const tree = renderer
      .create(
        <Box>
          <Text>Hello</Text>
        </Box>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should match the snapshot when left padded', () => {
    const tree = renderer.create(<Box spacing={{ left: true }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should match the snapshot when right padded', () => {
    const tree = renderer.create(<Box spacing={{ right: true }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should match the snapshot when top padded', () => {
    const tree = renderer.create(<Box spacing={{ top: true }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should match the snapshot when bottom padded', () => {
    const tree = renderer.create(<Box spacing={{ bottom: true }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
