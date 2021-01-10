import styled from "styled-components/native";
import theme from "../../theme";
import { scale } from "../../utils/layout";

export const NoTradeImage = styled.Image`
  width: 100%;
  resize-mode: center;
  margin-top: -100px;
`;

export const TitleWrapper = styled.View`
  background-color: ${theme.colorPalette.grey[7]};
  margin-left: ${theme.spacing[4]};
  margin-right: ${theme.spacing[4]};
  padding-left: ${theme.spacing[4]};
  padding-right: ${theme.spacing[4]};
  padding-top: ${theme.spacing[2]};
  padding-bottom: ${theme.spacing[2]};
  border-radius: 5;
`;
