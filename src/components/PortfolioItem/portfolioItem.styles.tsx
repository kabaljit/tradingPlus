import styled from 'styled-components/native';

export const PortfolioItemView = styled.View<{ backgroundColor: string }>`
  background-color: ${(p) => p.backgroundColor};
  padding-top-: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  height: 80px;
  margin: 10px;
  border-radius: 8px;
`;
