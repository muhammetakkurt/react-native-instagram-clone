import {
  Dimensions,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import Header from "./components/Header";
import user from "./../../data/user";
import { Button } from "react-native-elements";
import { Dropdown } from "./../../assets/icons";
import { useCallback, useState } from "react";
import Tabs from "./components/Tabs";
import UserInformation from "./components/UserInformation";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function Profile() {
  const { width } = Dimensions.get("window");
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <UserInformation user={user} />
        <View style={styles.buttonGroup}>
          <Button
            title="Profili Düzenle"
            buttonStyle={styles.editProfileButton}
            type="outline"
            titleStyle={styles.editProfileButtonTitle}
            containerStyle={{
              width: width - 80,
            }}
          ></Button>
          <Button
            title={<Dropdown size={22} />}
            buttonStyle={{
              borderColor: "#000",
              height: 30,
            }}
            type="outline"
            titleStyle={{ color: "#000" }}
            containerStyle={{
              width: 50,
            }}
          ></Button>
        </View>
        <Tabs user={user} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  translation: {
    marginTop: 2,
    fontWeight: "600",
  },
  buttonGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  editProfileButtonTitle: {
    color: "#000",
    fontSize: 13,
    fontWeight: "bold",
  },
  editProfileButton: {
    borderColor: "#000",
    height: 30,
  },
  tabContainer: {
    borderTopWidth: 0.3,
  },
  tabWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
