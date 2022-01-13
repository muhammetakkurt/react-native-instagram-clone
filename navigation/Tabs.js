import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Image, StyleSheet } from "react-native";

// Icons
import {
  Home,
  Search,
  Reels,
  Shop,
  HomeFilled,
  SearchFilled,
  ReelFilled,
  ShopFilled,
} from "../assets/icons";

// Screens
import {
  HomeScreen,
  SearchScreen,
  ReelScreen,
  ShopScreen,
  ProfileScreen,
  PostsScreen,
} from "../screens/index";

const ProfileStack = createNativeStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator initialRouteName="Profile">
      <ProfileStack.Screen
        options={{ headerShown: false }}
        name="Profile"
        component={ProfileScreen}
      />
      <ProfileStack.Screen
        name="Posts"
        component={PostsScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
    </ProfileStack.Navigator>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      shifting={true}
      tabBarPosition="bottom"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#262626",
        tabBarStyle: {
          borderTopWidth: 0.2,
          borderColor: "#000",
        },
        tabBarIndicatorStyle: {
          height: 0,
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        options={{
          tabBarIcon: ({ focused, color }) => {
            return focused ? (
              <HomeFilled fill={color} />
            ) : (
              <Home fill={color} />
            );
          },
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="SearchScreen"
        options={{
          tabBarIcon: ({ focused, color }) => {
            return focused ? (
              <SearchFilled fill={color} />
            ) : (
              <Search fill={color} />
            );
          },
        }}
        component={SearchScreen}
      />
      <Tab.Screen
        name="ReelScreen"
        options={{
          tabBarIcon: ({ focused, color }) => {
            return focused ? (
              <ReelFilled fill={color} />
            ) : (
              <Reels fill={color} />
            );
          },
        }}
        component={ReelScreen}
      />
      <Tab.Screen
        name="ShopScreen"
        options={{
          tabBarIcon: ({ focused, color }) => {
            return focused ? (
              <ShopFilled fill={color} />
            ) : (
              <Shop fill={color} />
            );
          },
        }}
        component={ShopScreen}
      />
      <Tab.Screen
        name="ProfileScreen"
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={focused ? styles.avatarFilled : styles.avatar}
                source={{
                  uri: "https://pbs.twimg.com/profile_images/1469263242644099072/fP9gXFrl_400x400.jpg",
                }}
              />
            );
          },
        }}
        component={ProfileStackScreen}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 24,
  },
  avatarFilled: {
    width: 24,
    height: 24,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#000",
  },
});
