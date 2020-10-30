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
  Modal,
  Dimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ImageView from "react-native-image-viewing";

import Carousel, { Pagination } from "react-native-snap-carousel";

import { MockScreenProps } from "./mockScreen.models";
const images = [
  require("../../../assets/homeScreen.png"),
  require("../../../assets/currencyListScreen.png"),
  require("../../../assets/currencyScreen.png"),
  require("../../../assets/paymentScreen.png"),
  require("../../../assets/summaryScreen.png"),
  require("../../../assets/currrencyScreenWithIndicator.png"),
];

const copy = [
  { description: "Home" },
  { description: "Search Screen" },
  { description: "Currency Screen" },
  { description: "Payment Screen " },
  { description: "Summary screen" },
  { description: "Currency Screen with purchase indicator in the graph" },
];

export const MockScreen: React.FunctionComponent<MockScreenProps> = ({}) => {
  const [selectedId, setSelectedId] = React.useState(null);

  const [modalVisible, setModalVisible] = React.useState(false);
  const [activeSlider, setActiveSlider] = React.useState(0);
  const [index, setIndex] = React.useState(0);
  let _carousel;

  const renderPagination = () => {
    return (
      <Pagination
        dotsLength={images.length}
        activeDotIndex={activeSlider}
        containerStyle={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: "rgba(255, 255, 255, 0.92)",
        }}
        inactiveDotStyle={{
          // Define styles for inactive dots here
          backgroundColor: "red",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };

  const _renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
            setIndex(index);
          }}
          style={{
            alignContent: "center",
            justifyContent: "center",
            flex: 1,
            backgroundColor: "#3871C2",
          }}
        >
          <View style={styles.header}></View>
          <Image source={item} style={styles.slideImage} />

          <View style={styles.header}></View>
          <Text style={styles.sliderText}>{copy[index].description}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.contentWrapper}>
          <Text style={styles.text}>
            To make clear the initial concept. App's mocks will be provided.
          </Text>

          <View style={styles.imageWrapper}>
            <Text style={styles.stepsText}>
              {`> Home Screen \n> Search Screen \n> Currency Screen \n> Summary Screen \n> Payment Screen \n> Back to Currency Screen`}
            </Text>
            <View style={styles.onlyImageWrapper}>
              <Image
                style={styles.mainImage}
                source={require("../../../assets/mocks.gif")}
              />
            </View>
          </View>
          <Text>The gif simulates an user journey in the app.</Text>
        </View>
        <View style={styles.sliderWrapper}>
          <Carousel
            ref={(c) => {
              _carousel = c;
            }}
            data={images}
            renderItem={_renderItem}
            pagingEnabled={true}
            sliderWidth={Dimensions.get("screen").width}
            onSnapToItem={(index) => setActiveSlider(index)}
            itemWidth={170}
          >
            {renderPagination}
          </Carousel>
        </View>
        <ImageView
          images={images}
          imageIndex={index}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    paddingLeft: 8,
    backgroundColor: "white",
  },
  text: {
    fontSize: 18,
  },
  mainImage: {
    width: 200,
    height: 300,
    resizeMode: "contain",
  },
  slideImage: {
    width: 150,
    height: 300,
    alignContent: "center",
    justifyContent: "center",
    marginLeft: 5,
  },
  slide: {
    width: 160,
    alignContent: "center",
    justifyContent: "center",

    borderRadius: 5,
  },
  close: {
    width: 32,
    height: 32,
    backgroundColor: "blue",
    color: "white",
  },
  closeWrapper: {
    backgroundColor: "red",
    top: 50,
  },
  sliderWrapper: {
    marginVertical: 12,
  },
  contentWrapper: {
    paddingHorizontal: 12,
  },
  imageWrapper: {
    flexDirection: "row",
    backgroundColor: "black",
    borderRadius: 13,
    marginVertical: 15,
  },
  stepsText: {
    width: 150,
    color: "white",
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  onlyImageWrapper: {
    width: 200,
    alignItems: "flex-start",
  },
  sliderText: {
    marginVertical: 12,
    textAlign: "center",
  },
  header: { backgroundColor: "#3871C2", height: 20 },
});

export default MockScreen;
