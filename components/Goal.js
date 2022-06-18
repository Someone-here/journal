import { FontAwesome5 } from "@expo/vector-icons";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { balsamiqSans, Theme } from "../config";

export function Goal({ goal, onPress }) {
  return (
    <TouchableOpacity style={styles.goalItem} onPress={() => onPress(goal)}>
      <View style={styles.goalItemBar}></View>
      <View style={styles.goalItemText}>
        <Text style={balsamiqSans[24]}>{goal.title}</Text>
        {goal.due ? (
          <FontAwesome5 name="clock" size={16} color={Theme.text} />
        ) : null}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  goalItemBar: {
    width: 8,
    height: "90%",
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 2,
    borderTopLeftRadius: 2,
    backgroundColor: Theme.accent,
    alignItems: "center",
    justifyContent: "center",
  },
  goalItemText: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 2,
  },
});
