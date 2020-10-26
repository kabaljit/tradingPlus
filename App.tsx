import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListSectionsScreen } from "./src/screens/ListSections";

export default function App() {
  return (
    <View style={styles.container}>
      <ListSectionsScreen></ListSectionsScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
