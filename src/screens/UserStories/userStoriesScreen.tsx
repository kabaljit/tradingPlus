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
  ScrollView,
  Dimensions,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

import { UserStoriesScreenProps } from "./userStoriesScreen.models";

const DATA = [
  {
    title: (styles) => (
      <>
        <View style={styles.wrapper}>
          <Image
            style={styles.image}
            source={{
              uri:
                "https://worldview.stratfor.com/sites/default/files/styles/article_full/public/cryptocurrency-gulf-display-shutterstock-1028639176.png?itok=K36RQG5A",
            }}
          ></Image>
        </View>
        <Text style={{ ...styles.text, ...styles.title }}>
          User 1: Buy currency
        </Text>
        <Text style={{ ...styles.text }}>
          A 21 old year user want to buy a new cryptocurrency. But he doesn’t
          have any knowledge about the currency. He will follow the next steps
          to own the currency in the app:
        </Text>
        <Text style={{ ...styles.paragraph, ...styles.list }}>
          1. From the home screen he will tap the search icon to search the
          currency.
        </Text>
        <Text style={{ ...styles.paragraph, ...styles.list }}>
          2. Once he found the currency, he will tab on it
        </Text>
        <Text style={{ ...styles.paragraph, ...styles.list }}>
          3. Then he will be redirect to currency screen where he will be
          provide with more information about the currency like price,
          description, volume and other technical indicators.
        </Text>
        <Text style={{ ...styles.paragraph, ...styles.list }}>
          4. He will proceed to buy the currency, by tapping on "Buy" button.
        </Text>
        <Text style={{ ...styles.paragraph, ...styles.list }}>
          5. Then he will be shown summary of his transaction with exchange rate
          and quantity he wants to purchase.
        </Text>
        <Text style={{ ...styles.paragraph, ...styles.list }}>
          6. Then we he will be asked to enter his bank details.
        </Text>
        <Text style={{ ...styles.paragraph, ...styles.list }}>
          7. In the end he will be redirected to success or failed screen
          depending on status of the transaction.
        </Text>
        <Text style={{ ...styles.paragraph, ...styles.list }}>
          8. Once he is done with the transaction, then he will be redirected to
          currency screen which the bought now with updated balance
        </Text>
      </>
    ),
    description: "sd fsdfsdfsd",
  },
  {
    title: (styles) => (
      <>
        <View style={styles.wrapper}>
          <Image
            style={styles.image}
            source={{
              uri:
                "https://worldview.stratfor.com/sites/default/files/styles/article_full/public/cryptocurrency-gulf-display-shutterstock-1028639176.png?itok=K36RQG5A",
            }}
          ></Image>
        </View>
        <Text style={{ ...styles.text, ...styles.title }}>
          User 2: View investment in the currency screen
        </Text>
        <Text style={{ ...styles.text }}>
          User owns some currencies and want to see his investment.
        </Text>
        <Text style={{ ...styles.paragraph, ...styles.list }}>
          1. User access the app by providing his biometrics
        </Text>
        <Text style={{ ...styles.paragraph, ...styles.list }}>
          2. On the home screen he will be able to see total amount invested
          until now and the outcome of that investment.
        </Text>
        <Text style={{ ...styles.paragraph, ...styles.list }}>
          3. From the home screen he will tap the search icon to search the
          currency.
        </Text>
        <Text style={{ ...styles.paragraph, ...styles.list }}>
          4. Once he found the currency, he will tab on it
        </Text>
        <Text style={{ ...styles.paragraph, ...styles.list }}>
          5. In Currency screen we will be provide with a graph. In that graph
          will have a horizontal dashed line which represents the amount he
          bought the currency, or the average amount spend for this currency to
          a visual .
        </Text>
      </>
    ),
    description: "sd fsdfsdfsd",
  },
  // {
  //   title: "title",
  //   description: "sd fsdfsdfsd",
  // },
];
export const UserStoriesScreen: React.FunctionComponent<UserStoriesScreenProps> = ({}) => {
  const [selectedId, setSelectedId] = React.useState(null);
  const [activeSlider, setActiveSlider] = React.useState(0);

  const _renderItem = ({ item, index }) => {
    return <View style={styles.slide}>{item.title(styles)}</View>;
  };

  const renderPagination = () => {
    return (
      <Pagination
        dotsLength={DATA.length}
        activeDotIndex={activeSlider}
        containerStyle={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: "rgba(255, 255, 255, 0.92)",
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };

  let _carousel;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Carousel
          ref={(c) => {
            _carousel = c;
          }}
          data={DATA}
          renderItem={_renderItem}
          pagingEnabled={true}
          sliderWidth={Dimensions.get("screen").width}
          onSnapToItem={(index) => setActiveSlider(index)}
          itemWidth={300}
        >
          {renderPagination}
        </Carousel>
      </ScrollView>
      {renderPagination}
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
    marginTop: 15,
    lineHeight: 26,
  },
  paragraph: {
    fontSize: 18,
    textAlign: "justify",
    marginTop: 10,
    lineHeight: 26,
  },
  list: {
    paddingLeft: 8,
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
  slider: {
    flex: 1,
  },
});

export default UserStoriesScreen;
