import * as React from "react";
import {
  FlatList,
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { StackScreenProps } from "./stackScreen.models";

export const StackScreen: React.FunctionComponent<StackScreenProps> = ({}) => {
  const [selectedId, setSelectedId] = React.useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Mock tools: Figma </Text>
          <View style={styles.row}>
            <View style={styles.columnLeft}>
              <Text style={styles.text}>
                We will have to make a lot of schemas, both for code and
                defining the user interface wireframe. Figma is a cloud base
                system which allows to save and interact simultaneously with the
                design.
              </Text>
            </View>
          </View>

          <Text style={styles.title}>Version Code: Github </Text>
          <Text style={styles.text}>
            Github is a code hosting platform for version control and
            collaboration. It lets you and others work together on projects from
            anywhere. The most famous code repository is GitHub.
          </Text>

          <Text style={styles.title}>Code Editor: Visual Studio Code. </Text>
          <Text style={styles.text}>
            One of the most versatile and widely adopted text editor for this
            type of project is Visual Studio Code. Another point is that VS
            Studio has a nice support for React Native.
          </Text>

          <Text style={styles.title}>Serveless: Firebase </Text>
          <Text style={styles.text}>
            Firebase: There is a new generation of backends called “serverless”.
            These are managed NoSQL databases where the frontend will directly
            query what it need, with a minimal server-side logic. The most well
            known option is Firebase, by Google.
          </Text>
          <View style={styles.divider}></View>
          <Text style={styles.title}>
            Front-end: React-native with Typescript
          </Text>
          <Text style={styles.text}>
            React is an open source JavaScript web framework initiated by
            Facebook. React Native codebases will share exactly the same logic
            to build iOS and Androïd version but with user interface components
            will be different to match the native experience. It is often
            recommended to rely on its strongly typed subset, TypeScript, for
            backend development since it ease debugging.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "white",
  },
  wrapper: {
    paddingHorizontal: 16,
    paddingVertical: 16,
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
  logo: {
    // width: '',
    height: 80,
    resizeMode: "contain",
  },
  row: {
    flexDirection: "row",
  },
  columnLeft: {
    width: "100%",
  },
  divider: {
    width: "100%",
    backgroundColor: "black",
  },
});

export default StackScreen;
