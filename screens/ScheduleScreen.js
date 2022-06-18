import { View, Text, StyleSheet, Button } from "react-native";
import { Theme } from "../config";
import { Header } from "../components";
import { CounterState } from "../config";

export function ScheduleScreen() {
  const [counter, setCounter] = CounterState.useState("counter");
  return (
    <View style={styles.container}>
      <Header>SCHEDULE</Header>
      <View style={styles.body}>
        <Text style={styles.text}>SCHEDULE</Text>
        <Text>{counter.counter}</Text>
        <Button
          title="Increment"
          onPress={() => setCounter({ counter: counter.counter + 1 })}
        />
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
