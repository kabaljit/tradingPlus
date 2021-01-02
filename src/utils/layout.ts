import { Dimensions, PixelRatio } from 'react-native';

interface SizeCache {
  [key: string]: number;
}

interface SizeCache2D {
  wp: SizeCache;
  hp: SizeCache;
}

let cache: SizeCache2D = {
  wp: {},
  hp: {},
};

let width = 0;
let height = 0;

/**
 * Updates screen dimensions used for calculations in `wp` and `hp` methods.
 *
 * Call this after an orientation change, or any event that change the size of
 * the screen. (e.g. picture in picture)
 */
export const updateScreenSizeReferences = () => {
  const window = Dimensions.get('window');
  width = window.width;
  height = window.height;
  cache = { wp: {}, hp: {} };
};

// Call once to get the initial references.
updateScreenSizeReferences();

/**
 * Converts a percentage size to an actual pixel size. Utilises caching.
 *
 * @param cacheSubsetKey Caching key to use.
 * @param fullSize Size to multiply with the percentage.
 * @param percentage The percentage that gets multiplied with `fullSize`.
 */
const percentageToSize = (
  cacheSubsetKey: keyof typeof cache,
  fullSize: number,
  percentage: number
) => {
  const cacheKey = `${percentage}`;
  if (Object.keys(cache[cacheSubsetKey]).includes(cacheKey)) {
    return cache[cacheSubsetKey][cacheKey];
  }
  const size = PixelRatio.roundToNearestPixel(fullSize * percentage);
  cache[cacheSubsetKey][cacheKey] = size;
  return size;
};

const longDimension = width < height ? height : width;
const guidelineBaseHeight = 805;

export const scaleHelper = (size: number) =>
  (longDimension / guidelineBaseHeight) * size;
export const moderateScale = (size: number, factor = 0.5) =>
  size + (scaleHelper(size) - size) * factor;

/**
 * Given a width percentage, returns the size in real pixels.
 *
 * @param percentage Percentage, from 0 to 1.
 */
export const scale = (value: number) => moderateScale(value, 0.5);

/**
 * Given a height percentage, returns the size in real pixels.
 *
 * @param percentage Percentage, from 0 to 1.
 */
export const hp = (percentage: number) =>
  percentageToSize('hp', height, percentage);

/**
 * Given a height in real pixels, returns the percentage size.
 * @param h Real pixel size of height.
 */
export const heightToPercentage = (h: number) =>
  `${Math.floor((h / Dimensions.get('window').height) * 100)}%`;
