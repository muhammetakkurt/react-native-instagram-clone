import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Divider() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#DADADA",
  },
});
