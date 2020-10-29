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

export const MockScreen: React.FunctionComponent<MockScreenProps> = ({}) => {
  const [selectedId, setSelectedId] = React.useState(null);

  const images = [
    require("../../../assets/homeScreen.png"),
    require("../../../assets/currencyListScreen.png"),
    require("../../../assets/currencyScreen.png"),
    require("../../../assets/paymentScreen.png"),
    require("../../../assets/summaryScreen.png"),
    require("../../../assets/currrencyScreenWithIndicator.png"),
  ];

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
  const copy = [
    { description: "Home" },
    { description: "Search search" },
    { description: "Currency Screen" },
    { description: "Payment Screen " },
    { description: "Summary screen" },
    { description: "Home " },
  ];

  const [modalVisible, setModalVisible] = React.useState(false);
  const [activeSlider, setActiveSlider] = React.useState(0);
  const [index, setIndex] = React.useState(0);
  let _carousel;
  const _renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
            setIndex(index);
          }}
        >
          <Image source={item} style={styles.slideImage} />
          <Text>{copy[index].description}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text> On this screen a initial mock can be found</Text>
        <Image
          style={styles.mainImage}
          source={require("../../../assets/mocks.gif")}
        ></Image>
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
  mainImage: {
    // width: 100,
    height: 300,
    resizeMode: "contain",
  },
  slideImage: {
    width: 150,
    height: 300,
  },
  slide: {
    width: 100,
    backgroundColor: "red",
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
});

export default MockScreen;
