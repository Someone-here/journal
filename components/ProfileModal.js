import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { Theme } from "../config";

export function ProfileModal({ visible, onClose }) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
      statusBarTranslucent={true}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.root}>
          <View style={styles.modal}>
            <Text>Hello World!</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0002",
  },
  modal: {
    marginTop: 100,
    width: "90%",
    height: "50%",
    backgroundColor: Theme.secondary,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowRadius: 100,
    shadowOffset: {
      width: -3,
      height: -2,
    },
    shadowOpacity: 1,
  },
});
