import { ColorPalette } from '../palette.models';
import { IColorContexts } from '../context.models';

export interface ITheme {
  palette: ColorPalette;
  context: {
    colors: IColorContexts;
  };
}

export interface IThemeProvider {
  theme?: ITheme;
}
