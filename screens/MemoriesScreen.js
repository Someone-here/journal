import { View, StyleSheet, ScrollView } from "react-native";
import { balsamiqSans, Theme } from "../config";
import { Post, Header } from "../components";
import { db } from "../config";
import * as Firestore from "firebase/firestore";
import { auth } from "../config";
import { useState } from "react";

export function MemoriesScreen({ navigation }) {
  // get the user's posts from the database according to the user's id
  const [posts, setPosts] = useState([]);
  const userId = auth.currentUser.uid;
  const postsRef = Firestore.collection(db, "users", "default", "posts");
  Firestore.getDocs(postsRef)
    .then((snapshot) => setPosts(snapshot.docs.map((doc) => doc.data())))
    .catch((e) => console.log(e));

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.body}>
        <Post />
        <Post />
      </ScrollView>
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
  body: {
    flexDirection: "column",
    flex: 1,
  },
});
