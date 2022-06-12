import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";

import { Theme } from "../config";
import { View } from "./View";

export const LoadingIndicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Theme.accent} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
