import styled from 'styled-components/native';

export const PortfolioItemView = styled.View<{ backgroundColor: string }>`
  background-color: ${(p) => p.backgroundColor};
  padding-top-: 8px;
  padding-bottom: 12px;
  padding-left: 10px;
  padding-right: 15px;
  height: 63px;
  margin: 10px;
  border-radius: 8px;
`;

export const PortfolioItemImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;
