import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import stories from "../../../data/stories";
import Avatar from "../../../components/shared/Avatar";

export default function Stories() {
  return (
    <View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={styles.container}
      >
        <Avatar
          user={{
            avatar:
              "https://pbs.twimg.com/profile_images/1469263242644099072/fP9gXFrl_400x400.jpg",
          }}
          withStory={false}
        />

        {stories.map((story, index) => {
          return <Avatar key={index} user={story.user} />;
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 105,
    paddingVertical: 10,
  },
});
