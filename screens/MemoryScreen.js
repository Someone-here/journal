import { Text, View, StyleSheet, Image } from "react-native";
import { inter, Theme } from "../config";
import { SharedElement } from "react-navigation-shared-element";

export function MemoryScreen({ route, navigation }) {
  const { image, title, description, id } = route.params;
  return (
    <View style={styles.container}>
      <SharedElement style={styles.imageContainer} id={id}>
        <Image source={image} style={styles.image} />
      </SharedElement>
      <View style={styles.content}>
        <Text style={[styles.title, inter.h2]}>{title}</Text>
        <Text style={[styles.desc, inter.normal]}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: Theme.secondary,
    padding: 20,
    paddingTop: 60,
  },
  image: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 300,
    borderRadius: 16,
  },
  content: {
    paddingTop: 20,
    width: "100%",
    height: "100%",
    marginTop: 10,
    paddingBottom: 10,
  },
  title: {
    marginBottom: 10,
  },
});
