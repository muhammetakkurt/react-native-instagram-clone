import React from "react";
import { Dimensions, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function GridItem({ style, image, index, type }) {
  const { width } = Dimensions.get("window");
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Posts", {
          name: type,
          imageIndex: index,
          type: type,
        })
      }
      key={index}
      style={{
        width: "100%",
        height: "100%",
        marginBottom: 1,
        paddingLeft: 1,
        ...style,
      }}
    >
      <Image
        style={{
          flex: 1,
          width: undefined,
          height: undefined,
        }}
        source={{ uri: image.url }}
      />
    </TouchableOpacity>
  );
}
