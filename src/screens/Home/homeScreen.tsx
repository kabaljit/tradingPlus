import * as React from "react";
import { FlatList, Text, View, Image } from "react-native";
import useSWR from "swr";

import { HomeScreenFormValues, HomeScreenProps } from "./homeScreen.models";
import { i18n } from "./homeScreen.i18n";
import { AuthContext } from "../../main/AuthProvider";
import TextInput from "../../components/TextInput";
import { api_key } from "../../../secret";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Box, Row } from "../../components/Box";
import BalanceSummary from "../../components/BalanceSummary";
import NoTrades from "./assets/noTrades.svg";
import { scale } from "../../utils/layout";
import { P } from "../../components/Typography";
import { ImageWrapper, NoTradeImage, TitleWrapper } from "./homeScreen.styles";
import theme from "../../theme";

export const HomeScreen: React.FunctionComponent<HomeScreenProps> = ({}) => {
  const { user } = React.useContext(AuthContext);
  const navigation = useNavigation();
  const [showSearchList, setShowSearchList] = React.useState(false);

  const [searchList, setSearchList] = React.useState([""]);

  const myTrades = true;

  const { data: coinsList, error } = useSWR(
    `https://min-api.cryptocompare.com/data/blockchain/list?api_key=${api_key}`
  );

  React.useEffect(() => {
    coinsList?.Data && setSearchList(Object.keys(coinsList.Data).slice(0, 10));
  }, [coinsList]);

  const onSearch = React.useCallback((text) => {
    const filterData =
      coinsList?.Data &&
      Object.keys(coinsList.Data)
        .filter((key) => {
          return key.toLowerCase().match(text.toLowerCase());
        })
        .slice(0, 10);

    setSearchList(filterData);
  }, []);

  const renderItem = React.useCallback(({ item }) => {
    return <Item ticker={item} />;
  }, []);

  const Item = React.useCallback(
    ({ ticker }) => {
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate("CoinDetail", { ticker: ticker })}
        >
          <Box spacing={{ left: 4, right: 4, top: 2, bottom: 2 }}>
            <Text>{ticker}</Text>
          </Box>
        </TouchableOpacity>
      );
    },
    [setShowSearchList]
  );

  const renderCoinsItem = React.useCallback(({ item }) => {
    return <CoinsItem ticker={item} />;
  }, []);

  const CoinsItem = React.useCallback(
    ({ ticker }) => {
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate("CoinDetail", { ticker: ticker })}
        >
          <Box spacing={{ left: 4, right: 4, top: 4, bottom: 2 }}>
            <Row flexDirection="row" justifyContent="space-between">
              <P weight="bold">{ticker}/USDT</P>
              <P>{Math.random()}</P>
            </Row>
          </Box>
        </TouchableOpacity>
      );
    },
    [setShowSearchList]
  );

  if (error) return <Text>failed to load</Text>;
  if (!coinsList) return <Text>loading...</Text>;
  // return <div>hello {data.name}!</div>;
  return (
    <>
      <Box flex={1}>
        <TextInput
          onFocus={() => {
            setShowSearchList(true);
          }}
          onBlur={() => setShowSearchList(false)}
          placeholder={i18n.t("searchLabel")}
          onChangeText={onSearch}
          autoFocus={false}
        ></TextInput>
        {showSearchList && searchList && (
          <FlatList
            data={searchList}
            renderItem={renderItem}
            // keyExtractor={(item) => item.id}
          />
        )}
        {!showSearchList && (
          <>
            <Box
              spacing={{ top: 4, left: 4, right: 4, bottom: 4 }}
              alignItems="center"
            >
              <BalanceSummary></BalanceSummary>
              {
                // <ImageWrapper>
                // </ImageWrapper>
              }
            </Box>
          </>
        )}
        {/* //TODO: FIX THE SVG IMPORT */}
        {/* {!myTrades && <NoTrades width={220} />} */}
        {!myTrades && !showSearchList && (
          <NoTradeImage source={require("./assets/noTrades.jpg")} />
        )}

        {myTrades && !showSearchList && (
          <>
            <TitleWrapper>
              <Row flexDirection="row" justifyContent="space-between">
                <P color="white" weight="bold">
                  Coins pairs
                </P>
                <P color="white" weight="bold">
                  Price
                </P>
              </Row>
            </TitleWrapper>
            <FlatList
              style={{
                backgroundColor: theme.colorPalette.grey[0],
                marginLeft: theme.spacing[4],
                marginRight: theme.spacing[4],
              }}
              data={searchList}
              renderItem={renderCoinsItem}
              // keyExtractor={(item) => item.id}
            />
          </>
        )}
      </Box>
    </>
  );
};

export default HomeScreen;
