import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, Text, StyleSheet, Dimensions, SafeAreaView } from "react-native";
import { Grid as GridIcon, Reels, Union } from "../../../assets/icons";
import Grid from "./Grid";

const { width } = Dimensions.get("window");

const Tab = createMaterialTopTabNavigator();

const FeedsTab = ({ user }) => {
  return (
    <View
      key={0}
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        height: Math.ceil(user.feeds.length / 3) * (width / 3),
      }}
    >
      {user.feeds.map((image, index) => (
        <Grid key={index} type={"feeds"} index={index} image={image} />
      ))}
    </View>
  );
};

const VideosTab = ({ user }) => {
  return (
    <View
      key={1}
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        height: Math.ceil(user.videos.length / 3) * (width / 3),
      }}
    >
      {user.videos.map((image, index) => (
        <Grid key={index} type={"videos"} index={index} image={image} />
      ))}
    </View>
  );
};

const TagsTab = ({ user }) => {
  return (
    <View
      key={2}
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        height: Math.ceil(user.tagged.length / 3) * (width / 3),
      }}
    >
      {user.tagged.map((image, index) => (
        <Grid key={index} type={"tagged"} index={index} image={image} />
      ))}
    </View>
  );
};

const TabNavigator = ({ user }) => {
  return (
    <Tab.Navigator
      tabBarScrollEnabled={true}
      tabBarPosition="top"
      initialRouteName="Tab1"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#262626",
        tabBarIndicatorStyle: {
          height: 0.5,
          backgroundColor: "#000",
        },
      }}
    >
      <Tab.Screen
        name="Tab1"
        options={{
          tabBarIcon: ({ focused, color }) => {
            return focused ? (
              <GridIcon size={24} />
            ) : (
              <GridIcon size={24} opacity={0.5} />
            );
          },
        }}
        children={() => <FeedsTab user={user} />}
      />
      <Tab.Screen
        name="Tab2"
        options={{
          tabBarIcon: ({ focused, color }) => {
            return focused ? (
              <Reels size={24} fill={"black"} />
            ) : (
              <Reels size={24} fill={"black"} opacity={0.5} />
            );
          },
        }}
        children={() => <VideosTab user={user} />}
      />
      <Tab.Screen
        name="Tab3"
        options={{
          tabBarIcon: ({ focused, color }) => {
            return focused ? (
              <Union size={24} fill={"black"} />
            ) : (
              <Union size={24} fill={"black"} opacity={0.5} />
            );
          },
        }}
        children={() => <TagsTab user={user} />}
      />
    </Tab.Navigator>
  );
};

const Tabs = ({ user }) => {
  const height = Math.max(
    Math.ceil(user.feeds.length / 3) * (width / 3) + 55,
    Math.ceil(user.videos.length / 3) * (width / 3) + 55,
    Math.ceil(user.tagged.length / 3) * (width / 3) + 55
  );

  return (
    <SafeAreaView style={{ height: height }}>
      <TabNavigator user={user} />
    </SafeAreaView>
  );
};

export default Tabs;
