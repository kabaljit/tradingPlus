import styled from 'styled-components/native';

import theme from '../../theme';
import { scale } from '../../utils/layout';

export const HeaderBar = styled.View`
  background-color: ${theme.colors.tradingZ.lightSilver};
  border-radius: ${theme.spacing[6]}px;
  height: ${scale(5)}px;
  width: ${scale(134)}px;
`;

export const HeaderViewTop = styled.View`
  width: 100%;
  height: ${scale(44)}px;
  align-items: center;
  background-color: ${theme.colors.tradingZ.white};
  border-top-left-radius: ${theme.spacing[6]}px;
  border-top-right-radius: ${theme.spacing[6]}px;
  padding-top: ${theme.spacing[6]}px;
  justify-content: flex-start;
`;

export const BoxShadow = styled.View`
  height: 30px;
  background-color: #f7f7fc;
  box-shadow: 0px -6px 14px rgba(0, 0, 0, 0.12);
  position: absolute;
  top: 0;
  left: 15px;
  right: 15px;
  border-top-left-radius: ${theme.spacing[6]}px;
  border-top-right-radius: ${theme.spacing[6]}px;
`;

export const HeaderView = styled.View`
  position: relative;
  background-color: ${theme.colors.tradingZ.white};
`;
