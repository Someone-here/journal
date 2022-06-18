import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from "react-native";
import { Theme } from "../config";
import { signOut } from "firebase/auth";
import { auth } from "../config";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { inter } from "../config";

export function ProfileModal({ visible, onClose }) {
  const handleLogout = () => {
    GoogleSignin.signOut();
    signOut(auth).catch((error) => console.log("Error logging out: ", error));
  };
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
            <Image
              style={styles.profileImage}
              source={{
                uri: auth.currentUser.photoURL,
              }}
            />
            <TouchableOpacity onPress={handleLogout}>
              <Text style={inter.h3}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
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
