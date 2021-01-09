import styled from 'styled-components/native';

import theme from '../../theme';

export const Wrapper = styled.View<{
  shallow?: boolean;
}>`
  margin-bottom: ${(p) => (p.shallow ? 0 : theme.spacing[4])}px;
`;
