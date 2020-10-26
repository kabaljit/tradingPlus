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

import { BoxShadow } from "react-native-shadow";

import {
  ListSectionsScreenFormValues,
  ListSectionsScreenProps,
} from "./listSectionsScreen.models";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Goal of the Final App",
    description: "",
    image: "",
    screen: "Goal",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "User stories",
    description: "",
    image: "",
    screen: "UserStories",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Mock sketches",
    description: "",
    image: "",
    screen: "Goal",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d32",
    title: "Comparison for different apps",
    description: "",
    image: "",
    screen: "Goal",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e32d72",
    title: "Technology stack",
    description: "",
    image: "",
    screen: "Goal",
  },
];

export const ListSectionsScreen: React.FunctionComponent<ListSectionsScreenProps> = ({
  navigation,
}) => {
  const [selectedId, setSelectedId] = React.useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    console.log("item: ", item);
    const shadowOpt = {
      width: 100,
      height: 100,
      color: "#000",
      border: 2,
      radius: 3,
      opacity: 0.2,
      x: 0,
      y: 3,
      // style: { marginVertical: 5 },
    };

    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(item.screen);
        }}
      >
        <View style={styles.item}>
          {/* <BoxShadow setting={shadowOpt}> */}
          {/* <View> */}
          <Image
            source={{
              uri: "https://picsum.photos/200",
            }}
            style={styles.image}
          />
          <Text style={styles.title}>{item.title}</Text>
          {/* </View> */}
          {/* </BoxShadow> */}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    paddingLeft: 8,
  },
  item: {
    borderWidth: 1,
    borderRadius: 13,
    borderColor: "#f9f9f9",
    // padding: 4,
    marginVertical: 8,
  },
  title: {
    fontSize: 32,
    padding: 8,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 13,
  },
});

export default ListSectionsScreen;
