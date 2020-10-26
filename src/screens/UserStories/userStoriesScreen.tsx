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

import { UserStoriesScreenProps } from "./userStoriesScreen.models";

export const UserStoriesScreen: React.FunctionComponent<UserStoriesScreenProps> = ({}) => {
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
        <Text style={styles.text}>User 1: Buy currency</Text>
        <Text style={styles.text}>
          A 21 old year user want to buy a new cryptocurrency. But he doesn’t
          have any knowledge about the currency. He will follow the next steps
          to own the currency 1. From the home screen he will tap the search
          icon to search the currency. 2. Once he found the currency, he will
          tab on it 3. Then in a new screen he will be provide with more
          information about the currency like price, description, volume and
          other technical information. 4. If he is happy with the currency then
          he will proceed to buy the currency, by tapping on buy button. 5. Then
          he will be shown summary of his transaction with exchange rate and
          quantity he wants to purchase. 6. Then we will be asked to enter his
          bank details. 7. In the end we will be known success or failed screen
          depending on status of the transaction 8. Once he is done with the
          transaction, we will be redirected to currency screen which the bought
          now with updated balance
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
  title: {
    fontWeight: "bold",
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

export default UserStoriesScreen;
