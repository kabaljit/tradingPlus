import * as React from "react";

import { BalanceSummaryProps } from "./balanceSummary.models";
import { BalanceSummaryView } from "./balanceSummary.styles";
import { i18n } from "./balanceSummary.i18n";
import { P } from "../Typography";
import { Box, Row } from "../Box";

export const BalanceSummary: React.FunctionComponent<BalanceSummaryProps> = ({}) => {
  return (
    <BalanceSummaryView>
      <Box spacing={{ top: 4, right: 4, left: 4, bottom: 4 }}>
        <Row flexDirection="row" spacing={{ bottom: 0 }}>
          <P weight="bold">{i18n.t("totalLabel")}: </P>
          <P>£0</P>
        </Row>
        <Row flexDirection="row">
          <P weight="bold">{i18n.t("portfolioLabel")}: </P>
          <P>£0</P>
        </Row>
      </Box>
    </BalanceSummaryView>
  );
};
