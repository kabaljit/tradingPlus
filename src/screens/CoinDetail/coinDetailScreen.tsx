import * as React from "react";

import {
  CoinDetailScreenFormValues,
  CoinDetailScreenProps,
} from "./coinDetailScreen.models";
import { i18n } from "./coinDetailScreen.i18n";

export const CoinDetailScreen: React.FunctionComponent<CoinDetailScreenProps> = (
  props
) => {
  const { ticker } = props.route.params;
  console.log("ticker: ", ticker);
  return <></>;
};

export default CoinDetailScreen;
