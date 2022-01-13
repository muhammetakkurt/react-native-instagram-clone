import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import Avatar from "../../../components/shared/Avatar";

export default function UserInformation({ user }) {
  return (
    <>
      <View style={styles.userInformation}>
        <Avatar user={user} withStory={false} showUsername={false} size={88} />
        <View style={styles.textContainer}>
          <Text style={styles.textBold}>{user.postCount}</Text>
          <Text>Gönderi</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textBold}>{user.followerCount}</Text>
          <Text>Takipçi</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textBold}>{user.followingCount}</Text>
          <Text>Takip</Text>
        </View>
      </View>
      <View style={styles.userDescription}>
        <Text style={styles.textBold}>{user.username}</Text>
        <Text>{user.description}</Text>
        <TouchableOpacity activeOpacity={0.6}>
          <Text style={styles.translation}>Çevirisine Bak</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  userInformation: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 30,
    marginTop: 5,
  },
  textBold: {
    fontWeight: "bold",
    fontSize: 16,
  },
  textContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  userDescription: {
    paddingHorizontal: 10,
  },

  translation: {
    marginTop: 2,
    fontWeight: "600",
  },
});
