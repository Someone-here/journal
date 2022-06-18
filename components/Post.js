import Dash from "react-native-dash";
import { Card, Paragraph } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { Date } from "./Date";

export function Post({ title, content, date, id, img }) {
  return (
    <View style={styles.post}>
      <View style={styles.date}>
        <Date date="11" />
        <Dash
          style={{
            marginTop: 8,
            width: 1,
            height: 100,
            flexDirection: "column",
          }}
        />
      </View>
      <View style={styles.postCard}>
        <Card style={{ borderRadius: 12, overflow: "hidden" }}>
          <Card.Cover
            source={{ uri: "https://picsum.photos/300/200" }}
            style={{ padding: 12 }}
          />
          <Card.Title title="Post Title" />
          <Card.Content>
            <Paragraph>
              lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem
              ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
              ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum
              lorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem
              ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum
            </Paragraph>
          </Card.Content>
        </Card>
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
    height: "auto",
    paddingLeft: 10,
    alignItems: "center",
  },
  postCard: {
    flex: 3.5,
    padding: 15,
    paddingTop: 25,
  },
});
