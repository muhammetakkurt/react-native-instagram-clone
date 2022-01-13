import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Add, Heart, Logo, Messenger } from "../../../assets/icons";

export default function Header() {
  return (
    <View style={styles.header}>
      <Logo size={104} style={styles.logo} />
      <View style={styles.actions}>
        <TouchableOpacity activeOpacity="0.2">
          <Add style={styles.button} size={24} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity="0.2">
          <View style={styles.notificationDotContainer}>
            <View style={styles.notificationDot} />
          </View>
          <Heart style={styles.button} size={24} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity="0.2">
          <Messenger style={styles.button} size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 36,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  logo: {
    marginLeft: -10,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    marginLeft: 15,
  },
  notificationDotContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 11,
    height: 11,
    zIndex: 2,
    position: "absolute",
    top: -2,
    right: -2,
    backgroundColor: "#fff",
  },
  notificationDot: {
    backgroundColor: "#FE3650",
    width: 8,
    height: 8,
    borderRadius: 10,
  },
});
