import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { mixPath, useVector } from 'react-native-redash';

import Header from './header';
import Cursor from './cursor';
import { GraphIndex, GraphProps } from './graph.models';
import { BUTTON_WIDTH, SIZE } from './graph.utils';
import {
  backgroundSelection,
  GraphView,
  Label,
  labelContainer,
  Selection,
} from './graph.styles';

const AnimatedPath = Animated.createAnimatedComponent(Path);

export const Graph: React.FunctionComponent<GraphProps> = ({
  data,
  currencyName,
  disableHeader = false,
}) => {
  const translation = useVector();
  const transition = useSharedValue(0);
  const previous = useSharedValue<GraphIndex>(0);
  const current = useSharedValue<GraphIndex>(0);

  const animatedProps = useAnimatedProps(() => {
    const previousPath = data[previous.value].data.path;
    const currentPath = data[current.value].data.path;
    return {
      d: mixPath(transition.value, previousPath, currentPath),
    };
  });

  const style = useAnimatedStyle(() => ({
    transform: [{ translateX: withTiming(BUTTON_WIDTH * current.value) }],
  }));

  //

  return (
    <GraphView>
      {!disableHeader && (
        <Header
          currencyName={currencyName || ''}
          graphs={data}
          translation={translation}
          index={current}
        />
      )}
      <View style={{ backgroundColor: 'white' }}>
        <Svg width={SIZE} height={SIZE}>
          <AnimatedPath
            animatedProps={animatedProps}
            fill="transparent"
            stroke="black"
            strokeWidth={3}
          />
        </Svg>
        <Cursor graphs={data} translation={translation} index={current} />
        <Selection>
          <View style={StyleSheet.absoluteFill}>
            <Animated.View style={[backgroundSelection, style]} />
          </View>
          {data.map((graph, index) => {
            return (
              <TouchableWithoutFeedback
                key={graph.label}
                onPress={() => {
                  previous.value = current.value;
                  transition.value = 0;
                  current.value = index as GraphIndex;
                  transition.value = withTiming(1);
                }}
              >
                <Animated.View style={[labelContainer]}>
                  <Label>{graph.label}</Label>
                </Animated.View>
              </TouchableWithoutFeedback>
            );
          })}
        </Selection>
      </View>
    </GraphView>
  );
};
