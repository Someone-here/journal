import { StyleSheet, View, Text } from "react-native";
import { Header } from "../components";

export function GoalScreen() {
  return (
    <View style={styles.container}>
      <Header>GOALS</Header>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    height: "100%",
    width: "100%",
    backgroundColor: Theme.primary,
    color: Theme.text,
  },
  text: {
    fontFamily: "BalsamiqSans_700Bold",
    fontSize: 48,
  },
});
