import { FontAwesome5 } from "@expo/vector-icons";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { balsamiqSans, Theme } from "../config";

export function Fab({ icon, children, onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.root}>
      <View style={styles.container}>
        <View style={styles.icon}>
          <FontAwesome5 name={icon} size={20} color={"white"} />
        </View>
        <View style={styles.children}>
          <Text style={[balsamiqSans[18], { color: "white" }]}>{children}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: {
    zIndex: 100,
    position: "absolute",
    borderRadius: 12,
    bottom: 15,
    right: 18,
  },
  container: {
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 25,
    backgroundColor: Theme.accent,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  children: {
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
});
