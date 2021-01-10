import * as React from "react";
import { FlatList, Text, View } from "react-native";
import useSWR from "swr";

import { HomeScreenFormValues, HomeScreenProps } from "./homeScreen.models";
import { i18n } from "./homeScreen.i18n";
import { AuthContext } from "../../main/AuthProvider";
import TextInput from "../../components/TextInput";
import { api_key } from "../../../secret";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export const HomeScreen: React.FunctionComponent<HomeScreenProps> = ({}) => {
  const { user } = React.useContext(AuthContext);
  const navigation = useNavigation();

  const [searchList, setSearchList] = React.useState([""]);

  const { data: coinsList, error } = useSWR(
    `https://min-api.cryptocompare.com/data/blockchain/list?api_key=${api_key}`
  );

  console.log("data: ", coinsList);

  React.useEffect(() => {
    setSearchList(Object.keys(coinsList.Data));
  }, []);

  const onSearch = React.useCallback((text) => {
    const filterData =
      coinsList &&
      Object.keys(coinsList.Data).filter((key) => {
        return key.toLowerCase().match(text.toLowerCase());
      });
    setSearchList(filterData);
  }, []);

  const renderItem = React.useCallback(({ item }) => {
    console.log("item:", item);
    return <Item ticker={item} />;
  }, []);

  const Item = React.useCallback(({ ticker }) => {
    console.log(ticker);
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("CoinDetail", { ticker: ticker })}
      >
        <Text>{ticker}</Text>
      </TouchableOpacity>
    );
  }, []);

  if (error) return <Text>failed to load</Text>;
  if (!coinsList) return <Text>loading...</Text>;
  // return <div>hello {data.name}!</div>;

  return (
    <>
      <TextInput
        placeholder={i18n.t("searchLabel")}
        onChangeText={onSearch}
      ></TextInput>
      {searchList && (
        <FlatList
          data={searchList}
          renderItem={renderItem}
          // keyExtractor={(item) => item.id}
        />
      )}
    </>
  );
};

export default HomeScreen;
