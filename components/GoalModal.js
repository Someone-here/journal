import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";

export function GoalModal({ goal, visible, onClose }) {
  if (!goal) return null;
  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{goal.title}</Text>
          <Text style={styles.notes}>{goal.notes}</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.due}>{goal.due}</Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.close}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 24,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "BalsamiqSans_700Bold",
    fontSize: 48,
    marginBottom: 24,
  },
  notes: {
    fontFamily: "BalsamiqSans_400Regular",
    fontSize: 24,
    marginBottom: 24,
  },
  body: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  due: {
    fontFamily: "BalsamiqSans_400Regular",
    fontSize: 24,
    marginBottom: 24,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  close: {
    fontFamily: "BalsamiqSans_400Regular",
    fontSize: 24,
    marginLeft: 24,
  },
});
