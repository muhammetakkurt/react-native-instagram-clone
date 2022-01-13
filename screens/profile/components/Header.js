import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Add, Burger, Dropdown } from "../../../assets/icons";

export default function Header() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.username} activeOpacity={0.6}>
        <Text style={styles.text}>akkurt.dev</Text>
        <Dropdown size={24} />
      </TouchableOpacity>
      <View style={styles.username}>
        <TouchableOpacity activeOpacity={0.6}>
          <Add size={24} style={styles.button} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
          <Burger size={24} style={styles.button} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  username: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
  },
  button: {
    marginLeft: 15,
  },
});
