import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Avatar({
  size = 67,
  showUsername = true,
  withStory = true,
  user,
}) {
  const innerRatioValue = size * 0.92;
  const styles = StyleSheet.create({
    story: {
      width: size * 1.11,
      marginHorizontal: 4,
      alignItems: "center",
      justifyContent: "flex-end",
    },
    cover: {
      width: size,
      height: size,
      borderRadius: size / 2,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 5,
    },
    avatar: {
      width: innerRatioValue,
      height: innerRatioValue,
      borderRadius: innerRatioValue,
      borderWidth: 3,
      borderColor: "#fff",
    },
    username: {
      fontSize: 12,
      letterSpacing: -0.2,
      textAlign: "center",
    },
    myStoryCover: {
      position: "relative",
    },
    myAvatar: {
      width: innerRatioValue,
      height: innerRatioValue,
      borderRadius: innerRatioValue,
      borderWidth: 3,
      borderColor: "#fff",
      marginBottom: 5,
    },
    addStoryButton: {
      backgroundColor: "#148fdb",
      width: 20,
      height: 20,
      position: "absolute",
      bottom: 7,
      right: 1,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
      borderWidth: 2,
      borderColor: "#fff",
    },
    addStoryButtonText: {
      color: "#fff",
      marginTop: -2,
      textAlign: "center",
      fontSize: 16,
      fontWeight: "bold",
    },
  });

  return withStory ? (
    <View style={styles.story}>
      <LinearGradient style={styles.cover} colors={["#DE0D46", "#F7A34B"]}>
        <Image style={styles.avatar} source={{ uri: user.avatar }} />
      </LinearGradient>
      {showUsername && (
        <Text style={styles.username} numberOfLines={1}>
          {user.name}
        </Text>
      )}
    </View>
  ) : (
    <View style={styles.story}>
      <View style={styles.myStoryCover}>
        <Image
          style={styles.myAvatar}
          source={{
            uri: user.avatar,
          }}
        />
        <View style={styles.addStoryButton}>
          <Text style={styles.addStoryButtonText}>+</Text>
        </View>
      </View>
      {showUsername && (
        <Text style={styles.username} numberOfLines={1}>
          Hikayen
        </Text>
      )}
    </View>
  );
}
