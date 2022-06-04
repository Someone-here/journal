import { Text, View, Button, StyleSheet } from "react-native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import Constants from "expo-constants";
import * as Auth from "firebase/auth";
import { auth } from "../config/firebase";

GoogleSignin.configure({
  webClientId:
    Constants.manifest.extra.webClientId,
  client_type: 3,
  scopes: ["profile", "email"],
});

async function onGoogleButtonPress() {
  const { idToken } = await GoogleSignin.signIn();
  const googleCredential = Auth.GoogleAuthProvider.credential(idToken);
  return Auth.signInWithCredential(auth, googleCredential);
}

export function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to Journal App!</Text>
      <Button
        title="Google Sign-In"
        onPress={() =>
          onGoogleButtonPress()
            .then(() => console.log("Signed in with Google!"))
            .catch((err) => console.log(Object.entries(err)))
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 30,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
  },
});
