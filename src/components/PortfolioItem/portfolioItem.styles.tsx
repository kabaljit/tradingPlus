import { SvgUri } from 'react-native-svg';
import styled from 'styled-components/native';

export const PortfolioItemView = styled.TouchableOpacity<{
  backgroundColor: string;
}>`
  background-color: ${(p) => p.backgroundColor};
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  height: 63px;
  margin: 10px;
  border-radius: 8px;
`;

export const PortfolioItemImage = styled.Image`
  width: 35px;
  height: 35px;
`;
