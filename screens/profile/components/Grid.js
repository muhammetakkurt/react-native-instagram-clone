import React from "react";
import { View, Dimensions, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Grid({ image, index, type }) {
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
        width: width / 3,
        height: width / 3,
        marginBottom: 1,
        paddingLeft: index % 3 !== 0 ? 1 : 0,
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
