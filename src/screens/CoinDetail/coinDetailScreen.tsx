import * as React from "react";

import {
  CoinDetailScreenFormValues,
  CoinDetailScreenProps,
} from "./coinDetailScreen.models";
import { i18n } from "./coinDetailScreen.i18n";
import { BottomSheet } from "react-native-btr";

import { LineChart } from "react-native-chart-kit";
import { format } from "date-fns";

import { Dimensions, View } from "react-native";
import { Box, Row } from "../../components/Box";
import { PrimaryButton } from "../../components/buttons";
import SuperScreen from "../../components/SuperScreen";
import { SafeArea } from "../../components/Layout";
import useSWR from "swr";
import { P } from "../../components/Typography";
import { Title } from "../../components/Typography/Typography";
import { useTheme } from "../../theme/provider/themeProvider";
import { TouchableOpacity } from "react-native-gesture-handler";
import WebView from "react-native-webview";
import { api_key } from "../../../secret";

export const CoinDetailScreen: React.FunctionComponent<CoinDetailScreenProps> = (
  props
) => {
  const { ticker }: { ticker: string } = props.route.params;
  console.log("ticker: ", ticker);

  const { data: price } = useSWR(
    `https://min-api.cryptocompare.com/data/price?fsym=${ticker.toUpperCase()}&tsyms=USDT&api_key=${api_key}`
  );

  const { data: coinCurrencyGraphData, error } = useSWR(
    `https://min-api.cryptocompare.com/data/v2/histominute?fsym=${ticker.toUpperCase()}&tsym=USDT&limit=8&api_key=${api_key}`
  );
  console.log("coinCurrencyGraphData: ", coinCurrencyGraphData?.Data);

  const graphPoints = React.useMemo(() => {
    return coinCurrencyGraphData?.Data?.Data?.map((value) => {
      return { x: format(Number(`${value.time}000`), "k:m"), y: value.close };
    });
  }, [coinCurrencyGraphData]);

  const theme = useTheme();
  const [visible, setVisible] = React.useState(false);

  const toggleBottomsheet = React.useCallback(() => {
    setVisible(!visible);
  }, [visible]);

  const onPressBuy = React.useCallback(() => {
    // on press  handle buy
    //add top  asycn storage
  }, []);
  console.log("price: ", price);
  const onPressSell = React.useCallback(() => {
    // on press  handle buy
    //remove from asycn storage
  }, []);
  return (
    <>
      <SuperScreen hasPadding={true}>
        <SafeArea>
          <Box flex={1}>
            <Row
              flexDirection="row"
              alignItems="flex-start"
              justifyContent="space-between"
              spacing={{ right: 3 }}
            >
              {price?.USDT && (
                <Title theme={theme} size="large" weight="bold">
                  {price.USDT}
                </Title>
              )}
              <Title theme={theme} size="large" weight="bold">
                {ticker}
              </Title>
            </Row>
            <LineChart
              data={{
                labels: graphPoints?.map((point) => point.x) ?? [0, 0],
                datasets: [
                  {
                    data: graphPoints?.map((point) => point.y) ?? [0, 0],
                  },
                ],
              }}
              width={Dimensions.get("window").width - 40} // from react-native
              height={220}
              yAxisLabel="$"
              yAxisSuffix=""
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#fb8c00",
                backgroundGradientTo: "#ffa726",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#ffa726",
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />

            <Box>
              <Row spacing={{ top: 6 }}>
                <P weight={"bold"} size="large">
                  {i18n.t("descriptionLabel")}{" "}
                </P>
              </Row>
              <P color="error">{i18n.t("descriptionNotice")} </P>
              <P>{i18n.t("descriptionText")}</P>
              <TouchableOpacity onPress={() => toggleBottomsheet()}>
                <Row alignItems="center" spacing={{ top: 6 }}>
                  <P color="link" weight="bold">
                    {i18n.t("moreLabel")}
                  </P>
                </Row>
              </TouchableOpacity>
            </Box>
          </Box>
          {/*  Footer ----*/}
          <Box>
            <Row>
              <PrimaryButton onPress={() => onPressBuy()}>
                {i18n.t("buyLabel")}
              </PrimaryButton>
            </Row>
            <Row>
              <PrimaryButton
                backgroundColor={theme.colorPalette.green[0]}
                onPress={() => onPressSell()}
              >
                {i18n.t("sellLabel")}
              </PrimaryButton>
            </Row>
          </Box>
          <BottomSheet
            visible={visible}
            //setting the visibility state of the bottom shee
            onBackButtonPress={toggleBottomsheet}
            //Toggling the visibility state on the click of the back botton
            onBackdropPress={toggleBottomsheet}
            //Toggling the visibility state on the clicking out side of the sheet
          >
            <WebView
              source={{ uri: `https://www.tradingview.com/ideas/${ticker}` }}
              style={{ marginTop: 50 }}
            />
            <PrimaryButton onPress={() => toggleBottomsheet()}>
              {i18n.t("closeLabel")}
            </PrimaryButton>
          </BottomSheet>
        </SafeArea>
      </SuperScreen>
    </>
  );
};

export default CoinDetailScreen;
