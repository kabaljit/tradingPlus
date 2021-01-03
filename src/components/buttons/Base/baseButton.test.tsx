import * as React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';

import { ThemeProvider } from '../../../theme/provider/themeProvider';

import BaseButton from '.';

const props = {
  children: 'base button label',
  testID: 'base-button-testid',
};

const itShouldMatchTheSnapshot = (callback: () => void) =>
  it('should match the snapshot', callback);

describe('Given a BaseButton', () => {
  describe('when the component is rendered', () => {
    itShouldMatchTheSnapshot(() => {
      const r = renderer.create(
        <ThemeProvider>
          <BaseButton {...props} />
        </ThemeProvider>
      );
      expect(r.toJSON()).toMatchSnapshot();
      expect(
        r.root.findByProps({ testID: `${props.testID}-label` })
      ).toBeTruthy();
    });
  });

  describe('if the button is set to loading', () => {
    itShouldMatchTheSnapshot(() => {
      const tree = renderer
        .create(
          <ThemeProvider>
            <BaseButton {...props} loading={true} />
          </ThemeProvider>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should render the ActivityLoader', () => {
      const instance = renderer.create(
        <ThemeProvider>
          <BaseButton {...props} loading={true} />
        </ThemeProvider>
      ).root;
      expect(
        instance.findByProps({ testID: 'activityIndicator' })
      ).toBeTruthy();
    });
  });

  describe('if the button is has a right accessory', () => {
    itShouldMatchTheSnapshot(() => {
      const tree = renderer
        .create(
          <ThemeProvider>
            <BaseButton {...props} accessoryRight={() => <Text>Hi</Text>} />
          </ThemeProvider>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should render the accessory', () => {
      const tree = renderer
        .create(
          <ThemeProvider>
            <BaseButton {...props} accessoryRight={() => <Text>Hi</Text>} />
          </ThemeProvider>
        )
        .toJSON();
      expect(JSON.stringify(tree).includes('Hi')).toBe(true);
    });
  });

  describe('if the button is has a left accessory', () => {
    itShouldMatchTheSnapshot(() => {
      const tree = renderer
        .create(
          <ThemeProvider>
            <BaseButton {...props} accessoryLeft={() => <Text>Hi</Text>} />
          </ThemeProvider>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should render the accessory', () => {
      const tree = renderer
        .create(
          <ThemeProvider>
            <BaseButton {...props} accessoryLeft={() => <Text>Hi</Text>} />
          </ThemeProvider>
        )
        .toJSON();
      expect(JSON.stringify(tree).includes('Hi')).toBe(true);
    });
  });

  describe('if the button is has a right accessory and is set to loading', () => {
    itShouldMatchTheSnapshot(() => {
      const tree = renderer
        .create(
          <ThemeProvider>
            <BaseButton
              {...props}
              loading={true}
              accessoryRight={() => <Text>Hi</Text>}
            />
          </ThemeProvider>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('it should hide the accessory', () => {
      const tree = renderer
        .create(
          <ThemeProvider>
            <BaseButton
              {...props}
              loading={true}
              accessoryRight={() => <Text>Hi</Text>}
            />
          </ThemeProvider>
        )
        .toJSON();
      expect(JSON.stringify(tree).includes('Hi')).toBe(false);
    });
  });
});
