import { View, StyleSheet, Image, Text, Button } from "react-native";
import { signOut } from "firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { auth, Theme } from "../config";
import { Header } from "../components";

export function TimelineScreen({ navigation }) {
  const handleLogout = () => {
    GoogleSignin.signOut();
    signOut(auth).catch((error) => console.log("Error logging out: ", error));
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <Button title="Logout" onPress={handleLogout} />
      </View>
      <View style={styles.footer}></View>
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
});
