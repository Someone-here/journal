import { View, StyleSheet, ScrollView } from "react-native";
import { balsamiqSans, Theme } from "../config";
import { Post, Header, Fab } from "../components";

export function MemoriesScreen({ navigation }) {
  const data = [
    {
      id: "a",
      title: "Trip to the Moon",
      description:
        "The trip was really fun and comp of having fun, having fun, fun and having fun.",
      date: new Date(),
      image: {
        uri: "https://picsum.photos/1920/1080?image=1021",
      },
    },
    {
      id: "b",
      title: "Seeing the Nothern Lights in Norway",
      description:
        "The trip was really fun and comp of having fun, having fun, fun and having fun.",
      date: new Date(),
      image: {
        uri: "https://picsum.photos/1920/1080?image=1022",
      },
    },
    {
      id: "c",
      title: "WOOOOW",
      description:
        "The trip was really fun and comp of having fun, having fun, fun and having fun.",
      date: new Date(),
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.body}>
        <Header />
        {data.map((postData) => (
          <Post {...postData} key={postData.id} />
        ))}
      </ScrollView>
      <Fab icon="plus">Memory</Fab>
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
