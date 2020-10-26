import * as React from "react";
import {
  FlatList,
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";

import { GoalScreenProps } from "./goalScreen.models";

export const GoalScreen: React.FunctionComponent<GoalScreenProps> = ({}) => {
  const [selectedId, setSelectedId] = React.useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Image
          style={styles.image}
          source={{
            uri:
              "https://worldview.stratfor.com/sites/default/files/styles/article_full/public/cryptocurrency-gulf-display-shutterstock-1028639176.png?itok=K36RQG5A",
          }}
        ></Image>
        <Text style={styles.text}>
          In current time, everyday new digital assets are being develop and
          adopted by the global community. The main assets we are known is
          Bitcoin, which is trade over $4.1 billion every day. Why should not we
          developer a platform to exchange these digital assets simpler and more
          convenient for average human being. The main goal of this application
          is to provide access to huge market for non-technical users. Where
          they use this app to trade and own cryptocurrencies.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 12,
    backgroundColor: "white",
  },
  text: {
    fontSize: 18,
    textAlign: "justify",
    marginTop: 30,
    lineHeight: 26,
  },
  wrapper: {
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 13,
  },
});

export default GoalScreen;
