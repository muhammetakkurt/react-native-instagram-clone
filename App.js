import { Provider } from "react-redux";
import store from "./store/store";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import Tabs from "./navigation/Tabs";
import BottomPage from "./components/shared/BottomPage";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
        <BottomPage />
      </SafeAreaView>
    </Provider>
  );
}
