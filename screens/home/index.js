import { useCallback, useMemo, useRef, useState } from "react";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Post from "../../components/shared/Post";
import CustomBackdrop from "../../components/shared/CustomBackdrop";
import Header from "./components/Header";
import Stories from "./components/Stories";
import posts from "../../data/posts";
import Divider from "../../components/shared/Divider";
import { Button } from "react-native-elements";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function Home() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        stickyHeaderIndices={[1]}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Stories />
        <Divider />
        {posts.map((post, key) => (
          <Post
            key={key}
            post={post}
            avatar={post.user.avatar}
            username={post.user.username}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
