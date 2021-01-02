import { colorPalette } from '../palette';
import context from '../context';


const {
  customColors,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ...contextRest
} = context;

export const tradeTheme = {
  palette: colorPalette,
  context: {
    colors: customColors,
    ...contextRest,
  },
};
