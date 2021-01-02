import { createTheming } from "@callstack/react-theme-provider";
import React from "react";

import { tradeTheme } from "./mytheme";
import { ITheme, IThemeProvider } from "./models";

const {
  ThemeProvider: BareThemeProvider,
  withTheme,
  useTheme,
} = createTheming<ITheme>(tradeTheme);

export const ThemeProvider: React.FunctionComponent<IThemeProvider> = ({
  children,
  theme,
}) => <BareThemeProvider theme={theme}>{children}</BareThemeProvider>;

export { useTheme, withTheme };
