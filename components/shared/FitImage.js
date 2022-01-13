import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";

export default function FitImage({ image }) {
  const screenWidth = Dimensions.get("window").width;

  const ratio = image.width / screenWidth;
  const height = image.height / ratio;

  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      width: screenWidth,
      height: "100%",
    },
    image: {
      justifyContent: "center",
      alignItems: "center",
      width: screenWidth,
      height: height,
    },
  });

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image.url }} />
    </View>
  );
}
