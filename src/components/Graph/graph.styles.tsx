import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import theme from '../../theme';
import { BUTTON_WIDTH } from './graph.utils';
import { CURSOR } from './cursor';

const { width } = Dimensions.get('window');

const SELECTION_WIDTH = width - 32;

export const GraphView = styled.View`
  background-color: ${theme.colors.tradingZ.charcoal};
`;

export const Selection = styled.View`
  flex-direction: row;
  width: ${SELECTION_WIDTH};
  align-self: center;
`;
export const labelContainer = {
  padding: 16,
  width: BUTTON_WIDTH,
};
export const Label = styled.Text`
  font-size: 16;
  color: ${theme.colors.tradingZ.charcoal};
  font-weight: bold;
  text-align: center;
`;

export const CursorBody = styled.View`
  width: 15;
  height: 15;
  border-radius: 7.5;
  background-color: black;
`;
export const cursor = {
  width: CURSOR,
  height: CURSOR,
  borderRadius: CURSOR / 2,
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
  justifyContent: 'center',
  alignItems: 'center',
};
export const backgroundSelection = {
  backgroundColor: theme.colors.tradingZ.lightSilver,
  ...StyleSheet.absoluteFillObject,
  width: BUTTON_WIDTH,
  borderRadius: 8,
};
