import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { inter, Theme } from "../config";
import { SharedElement } from "react-navigation-shared-element";
import { useNavigation } from "@react-navigation/native";

export function Card({ title, description, image, date, id }) {
  const formatAMPM = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    hours %= 12;
    hours = hours || 12;
    return `${hours}:${minutes < 10 ? `0${minutes}` : minutes} ${
      hours >= 12 ? "PM" : "AM"
    }`;
  };
  const nav = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => nav.push("Detail", { image, title, description, id })}
    >
      <View style={styles.card}>
        {image ? (
          <SharedElement id={id} style={styles.cardImage}>
            <Image source={image} style={styles.cardImage} />
          </SharedElement>
        ) : null}
        <View style={styles.cardContent}>
          <Text style={[styles.cardTitle, inter.h3]}>{title}</Text>
          <Text style={[styles.cardTime, inter.label]}>{formatAMPM(date)}</Text>
          <Text style={[styles.cardDescription, inter.bodyBase]}>
            {description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: Theme.secondary,
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 18,
    height: "100%",
    borderRadius: 16,
  },
  cardImage: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 200,
    overflow: "hidden",
    borderRadius: 16,
  },
  cardContent: {
    width: "100%",
    height: "100%",
    marginTop: 10,
    color: Theme.text,
    paddingBottom: 10,
  },
  cardTime: {
    marginBottom: 10,
  },
});
