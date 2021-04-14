import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const SELECTION_WIDTH = width - 32;
export const BUTTON_WIDTH = (width - 32) / 5;

export const GraphView = styled.View`
  flex: 1;
  background-color: white;
`;

export const Selection = styled.View`
  flex-direction: row;
  width: ${SELECTION_WIDTH};
  align-self: center;
`;
export const LabelContainer = styled.View`
  padding-left: 16;
  padding-right: 16;
  padding-top: 16;
  padding-bottom: 16;
  width: ${BUTTON_WIDTH};
`;
export const Label = styled.Text`
  font-size: 16;
  color: black;
  font-weight: bold;
  text-align: center;
`;

export const backgroundSelection = {
  backgroundColor: '#f3f3f3',
  ...StyleSheet.absoluteFillObject,
  width: BUTTON_WIDTH,
  borderRadius: 8,
};
