/* eslint-disable camelcase */

import Animated from "react-native-reanimated";
import { Path, Vector } from "react-native-redash";

export interface GraphProps {
  data:  GraphDataset[];
  disableHeader?: boolean;
  currencyName?: string;
  height?: number
  disabledButton: boolean
}

export interface DrawGraphProps {
  data:  GraphDataset[];
  transition: Animated.SharedValue<number>,
  previous: Animated.SharedValue<GraphIndex>,
  current: Animated.SharedValue<GraphIndex>,
  height?: number
}

export interface GraphDataset {
    label: string;
    value: number;
    data?: {
        label: string;
        minPrice: number;
        maxPrice: number;
        percentChange: string;
        path: Path;
    };
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
  currencyName: string;
  translation: Vector<Animated.SharedValue<number>>;
  index: Animated.SharedValue<GraphIndex>;
  graphs: GraphDataset[]
  disableHeader?: boolean
}