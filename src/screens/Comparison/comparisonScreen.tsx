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
import { ScrollView } from "react-native-gesture-handler";

import { ComparisonScreenProps } from "./comparisonScreen.models";

export const ComparisonScreen: React.FunctionComponent<ComparisonScreenProps> = ({}) => {
  const [selectedId, setSelectedId] = React.useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <ScrollView>
          <Text style={styles.title}>Trading212</Text>
          <Text style={styles.text}>
            Trading 212 has a purpose-built app for mobile users (available on
            iOS and Android). It offers full functionality, even allowing trades
            to be conducted directly from visualisations, a feature unavailable
            on many other mobile apps. The user experience is excellent, with
            clear navigation and well thought out data visualisations.
          </Text>
          <Text style={styles.title}> Benifits</Text>
          <Text style={styles.text}>
            Trading 212 has a lot to offer potential users. The primary benefit
            is commission free trading across a broad range of asset types.
            Particularly for frequent users, these small charges can quickly add
            up, eating into what can already be tight margins. It’s an extremely
            attractive prospect for those looking to enter the marketplace for
            the first time. Another key benefit is the simplicity and usability
            of the Trading 212 mobile app. Free to download, easy to navigate
            and with a deep layer of functionality, it removes a huge amount of
            the complexity often associated with trading assets, without
            sacrificing on features. Finally, the range of educational material
            available is a key draw for those looking to learn more about
            financial markets.
          </Text>
          <Image
            style={styles.image}
            source={require("../../../assets/trading212.jpeg")}
          ></Image>
          <Text style={styles.title}> Disadvantage</Text>
          <Text style={styles.text}>
            Trading 212 has a very few disadvantages as an app. This app is not
            design for professional traders who need more techncal information
            to trade. These kind of users still prefer to use Meta Trader.
            Another disadvantage is that there is no way to change the default
            currency. You have to stay with registrated currency. Users don't
            have a way to change it. Trade212 is not design for crypto trader.
          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    paddingLeft: 8,
  },
  wrapper: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  text: { fontSize: 18, textAlign: "justify", lineHeight: 26 },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 24,
    borderWidth: 2,
    borderRadius: 13,
    backgroundColor: "#3871C2",
    borderColor: "#3871C2",
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 6,
    color: "white",
  },
  image: {
    width: 150,
    height: 300,
  },
});

export default ComparisonScreen;
