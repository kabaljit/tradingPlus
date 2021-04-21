/* eslint-disable camelcase */

import Animated from "react-native-reanimated";
import { Vector } from "react-native-redash";

export interface GraphProps {
  data: any
}


export interface Amount {
  amount: string;
  currency: string;
  scale: string;
}

export interface PercentChange {
  hour: number;
  day: number;
  week: number;
  month: number;
  year: number;
}

export interface LatestPrice {
  amount: Amount;
  timestamp: string;
  percent_change: PercentChange;
}


export interface DataPoints {
  currency: string;
  timestamps: string[];
  prices: string[];
}


export type GraphIndex = 0 | 1 | 2 | 3 | 4;



export interface CursorProps {
  index: Animated.SharedValue<GraphIndex>;
  translation: Vector<Animated.SharedValue<number>>;
}


export interface HeaderProps {
  translation: Vector<Animated.SharedValue<number>>;
  index: Animated.SharedValue<GraphIndex>;
}