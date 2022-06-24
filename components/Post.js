import Dash from "react-native-dash";
import { Card } from "./Card";
import { View, StyleSheet } from "react-native";
import { Date } from "./Date";
import { useRef, useEffect } from "react";

export function Post({ title, description, date, image, id }) {
  return (
    <View style={[styles.post, image ? { height: 420 } : { height: 200 }]}>
      <View style={styles.date}>
        <Date date={date} />
        <Dash
          style={{
            marginTop: "10%",
            width: 1,
            height: "80%",
            flexDirection: "column",
          }}
          dashGap={10}
          dashLength={10}
          dashThickness={2}
          dashColor={Theme.accent}
        />
      </View>
      <View style={styles.postCard}>
        <Card
          title={title}
          description={description}
          image={image}
          date={date}
          id={id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    flexDirection: "row",
    overflow: "hidden",
    marginTop: 12,
  },
  date: {
    height: "100%",
    paddingLeft: 10,
    alignItems: "center",
  },
  postCard: {
    flex: 3.5,
    padding: 15,
    paddingTop: 25,
  },
});
