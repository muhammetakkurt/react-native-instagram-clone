import React, { useEffect, useRef, useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from "react-native";
import Post from "../../components/shared/Post";
import user from "../../data/user";

const PostsScreen = ({ navigation, route }) => {
  const { imageIndex, type } = route.params;

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          data={user[type]}
          initialScrollIndex={imageIndex}
          keyExtractor={(item, key) => `${key}`}
          renderItem={({ item }) => {
            return (
              <Post post={item} avatar={user.avatar} username={user.username} />
            );
          }}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default React.memo(PostsScreen);
