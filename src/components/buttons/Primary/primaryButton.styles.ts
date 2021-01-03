import styled from 'styled-components/native';

import BaseButton from '../Base';
import theme from '../../../theme';

export const Button = styled(BaseButton)`
  ${(p) =>
    p.disabled &&
    `
    background-color: ${theme.colors.customColors.grey};
  `}
`;

export const Label = styled.Text``;
