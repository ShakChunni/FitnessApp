import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./controller/StackNavigator";
import { States } from "./model/States";
States;
export default function App() {
  return (
    <States>
      <StackNavigator />
    </States>
  );
} //sdasdasd

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
