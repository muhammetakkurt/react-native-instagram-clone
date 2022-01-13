import { useState } from "react";

import { SearchBar, Image } from "react-native-elements";
import { View, StyleSheet, Dimensions, FlatList, Text } from "react-native";
import user from "../../data/user";
import Header from "./components/Header";

const { width } = Dimensions.get("window");

export default function Shop() {
  const [search, setSearch] = useState("");

  const searchFilterFunction = (text) => {
    if (text) {
      setSearch(text);
    } else {
      setSearch(text);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <SearchBar
        lightTheme={true}
        containerStyle={styles.search}
        inputContainerStyle={styles.searchInputContainer}
        searchIcon={{ size: 24 }}
        onChangeText={(text) => searchFilterFunction(text)}
        onClear={(text) => searchFilterFunction("")}
        placeholder="Ara"
        value={search}
      />
      <FlatList
        data={user.feeds}
        style={styles.list}
        numColumns={2}
        keyExtractor={(e, k) => `${k}`}
        renderItem={({ item }) => (
          <Image source={{ uri: item.url }} containerStyle={styles.item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  search: {
    backgroundColor: "#fff",
    borderTopWidth: 0,
  },
  searchInputContainer: {
    height: 30,
    borderRadius: 8,
    marginHorizontal: 10,
    borderWidth: 0,
  },
  list: {
    width: "100%",
  },
  item: {
    aspectRatio: 1,
    width: "100%",
    flex: 1,
    margin: 0.3,
  },
});
