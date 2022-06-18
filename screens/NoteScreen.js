import { View, Text, StyleSheet } from "react-native";
import { Theme } from "../config";
import { Header } from "../components";

export function NoteScreen() {
  return (
    <View style={styles.container}>
      <Header>Notes</Header>
      <View style={styles.body}>
        <Text style={styles.text}>NOTES</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    alignItems: "center",
    backgroundColor: Theme.primary,
  },
  body: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  text: {
    fontFamily: "BalsamiqSans_700Bold",
    fontSize: 48,
  },
});
