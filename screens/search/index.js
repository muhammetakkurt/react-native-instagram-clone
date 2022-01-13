import { useState } from "react";

import { SearchBar } from "react-native-elements";
import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import GridItem from "./components/GridItem";
import user from "../../data/user";

const { width } = Dimensions.get("window");

Object.defineProperty(Array.prototype, "chunkInefficient", {
  value: function (chunkSize) {
    var array = this;
    return [].concat.apply(
      [],
      array.map(function (elem, i) {
        return i % chunkSize ? [] : [array.slice(i, i + chunkSize)];
      })
    );
  },
});

export default function Search() {
  const [search, setSearch] = useState("");

  const searchFilterFunction = (text) => {
    if (text) {
      setSearch(text);
    } else {
      setSearch(text);
    }
  };

  const DoubleItem = ({ item }) => {
    return (
      <View style={styles.doubleHeightItem}>
        <GridItem image={item} type={"feeds"} />
      </View>
    );
  };

  const Items = ({ items }) => {
    return (
      <View style={styles.itemsContainer}>
        {items.map((item, key) => (
          <GridItem key={key} image={item} type={"feeds"} style={styles.item} />
        ))}
      </View>
    );
  };

  const RenderCombine = ({ renderType, items = [] }) => {
    const slicedBeginItems = items.slice(1, items.length);
    const slicedEndItems = items.slice(0, items.length - 1);
    return renderType % 2 === 0 ? (
      <>
        <DoubleItem item={items[0]} />
        <Items items={slicedBeginItems} />
      </>
    ) : (
      <>
        <Items items={slicedEndItems} />
        <DoubleItem item={items[items.length - 1]} />
      </>
    );
  };

  return (
    <View style={styles.container}>
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
      <ScrollView>
        {user.feeds.chunkInefficient(5).map((feeds, key) => (
          <View key={key} style={styles.combineContainer}>
            <RenderCombine renderType={key} items={feeds} />
          </View>
        ))}
      </ScrollView>
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
  },
  itemStyle: {
    padding: 10,
  },
  list: {
    width: "100%",
  },
  itemsContainer: {
    width: width - width / 3,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    aspectRatio: 1,
    width: width / 3,
    height: width / 3,
  },
  combineContainer: { width: width, flexDirection: "row" },
  doubleHeightItem: {
    width: width - width / 1.5,
    height: width - width / 3.05,
    flexDirection: "row",
  },
});
