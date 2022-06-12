import { View, Text, StyleSheet } from "react-native";
import { Theme } from "../config";

export function NoteScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>NOTES</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Theme.primary,
  },
  text: {
    fontFamily: "BalsamiqSans_700Bold",
    fontSize: 48,
  },
});
