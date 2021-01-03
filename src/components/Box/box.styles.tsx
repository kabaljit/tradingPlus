import styled from 'styled-components/native';

import themeDefault from '../../theme';
import { ITheme } from '../../theme/provider/models';

import { BoxProps, BoxSpacing } from './box.models';

const createPadding = (key: keyof BoxSpacing) => (props: BoxProps) => {
  const padding = props.spacing && props.spacing[key];
  if (typeof padding === 'number') {
    return `${themeDefault.spacing[padding]}px`;
  }
  return padding ? `${themeDefault.spacing[1]}px` : '0px';
};

export const BoxView = styled.View<BoxProps & { theme: ITheme }>`
  ${(p) => p.flex && `flex: ${p.flex};`}
  ${(p) => p.flexDirection && `flex-direction: ${p.flexDirection};`}
  ${(p) => p.justifyContent && `justify-content: ${p.justifyContent};`}
  ${(p) => p.alignItems && `align-items: ${p.alignItems};`}
  ${(p) =>
    p.background && `background-color: ${p.theme.palette[p.background][0]}`};
  padding-left: ${createPadding('left')};
  padding-right: ${createPadding('right')};
  padding-top: ${createPadding('top')};
  padding-bottom: ${createPadding('bottom')};
`;
