import * as shape from "d3-shape";
import { scaleLinear } from "d3-scale";
import { Dimensions } from "react-native";
import { parse } from "react-native-redash";
import { DataPoints } from ".";
import data from "./data copy.json";

export const SIZE = Dimensions.get("window").width;
const values = data[0].prices;
const POINTS = 60;

import data from './data.json';

import { Prices, DataPoints } from '.';

export const SIZE = Dimensions.get('window').width;
const values = data.data.prices as Prices;
const POINTS = 60;

export const buildGraph = (datapoints: DataPoints, label: string) => {

  const formattedValues = datapoints.prices.map(
    (price, index) => [ Number(price), new Date(datapoints.timestamps[index]).getTime()] as [number, number]
  );

  const prices = formattedValues.map((value) => value[0]);
  const dates = formattedValues.map((value) => value[1]);

  const scaleX = scaleLinear()
    .domain([Math.min(...dates), Math.max(...dates)])
    .range([0, SIZE]);
 
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const scaleY = scaleLinear().domain([minPrice, maxPrice]).range([SIZE, 0]);

  return {
    label,
    minPrice,
    maxPrice,
    percentChange: 100,
    path: parse(
      shape
        .line()
        .x(([, x]) => scaleX(x) as number)
        .y(([y]) => scaleY(y) as number)
        .curve(shape.curveBasis)(formattedValues) as string
    ),
  };
};

export const graphs = [
  {
    label: "1H",
    value: 0,
    data: buildGraph(data[0], "Last Hour"),
  },
  {
    label: '1D',
    value: 1,
    // data: buildGraph(values.day, "Today"),
  },
  {
    label: '1M',
    value: 2,
    // data: buildGraph(values.month, "Last Month"),
  },
  {
    label: '1Y',
    value: 3,
    // data: buildGraph(values.year, "This Year"),
  },
  {
    label: 'all',
    value: 4,
    // data: buildGraph(values.all, "All time"),
  },
] as const;

export const BUTTON_WIDTH = (SIZE - 32) / graphs.length;




  
  export const defaultGraphDataset = () => [
    {
      label: '1D',
      value: 0,
      data: {
        label: 'Last Day',
        minPrice: 0,
        maxPrice: 0,
        percentChange: 0,
        path: {
          move: { x: 207, y: 207 },
          curves: [
            {
              c1: { x: 207, y: 207 },
              c2: { x: 207, y: 207 },
              to: { x: 207, y: 207 },
            },
          ],
          close: false,
        },
      },
    },
    {
      label: '1M',
      value: 0,
      data: {
        label: 'Last Month',
        minPrice: 0,
        maxPrice: 0,
        percentChange: 0,
        path: {
          move: { x: 207, y: 207 },
          curves: [
            {
              c1: { x: 207, y: 207 },
              c2: { x: 207, y: 207 },
              to: { x: 207, y: 207 },
            },
          ],
          close: false,
        },
      },
    },
    {
      label: '1Y',
      value: 0,
      data: {
        label: 'Last Year',
        minPrice: 0,
        maxPrice: 0,
        percentChange: 0,
        path: {
          move: { x: 207, y: 207 },
          curves: [
            {
              c1: { x: 207, y: 207 },
              c2: { x: 207, y: 207 },
              to: { x: 207, y: 207 },
            },
          ],
          close: false,
        },
      },
    },
    {
      label: 'all',
      value: 0,
      data: {
        label: 'All',
        minPrice: 0,
        maxPrice: 0,
        percentChange: 0,
        path: {
          move: { x: 207, y: 207 },
          curves: [
            {
              c1: { x: 207, y: 207 },
              c2: { x: 207, y: 207 },
              to: { x: 207, y: 207 },
            },
          ],
          close: false,
        },
      },
    },

  ];