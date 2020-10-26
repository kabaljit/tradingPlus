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
      <Text>User Stories</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    paddingLeft: 8,
  },
});

export default UserStoriesScreen;
