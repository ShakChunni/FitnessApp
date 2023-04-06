import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import fitness from "../model/fitness";

const WorkoutScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.firstContainer}>
      <Image
        style={styles.topImageContainer}
        source={{ uri: route.params.image }}
      />
      <Ionicons
        onPress={() => navigation.goBack()}
        style={styles.backButtonstyle}
        name="arrow-back"
        size={28}
        color="black"
      />

      {route.params.excersises.map((item, key) => (
        <Pressable style={styles.pressableStyle}>
          <Image style={styles.imageContainer} source={{ uri: item.image }} />

          <View style={styles.textViewStyle}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {item.name}
            </Text>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {item.sets}
            </Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default WorkoutScreen;

const styles = StyleSheet.create({
  firstContainer: {
    marginTop: 50,
    backgroundColor: "#FFFFFF",
  },
  topImageContainer: {
    width: "100%",
    height: 170,
  },
  backButtonstyle: {
    position: "absolute",
    top: 15,
    left: 20,
    color: "#FFFFFF",
  },
  imageContainer: {
    width: 90,
    height: 90,
  },
  pressableStyle: {
    alignItems: "center",
    flexDirection: "row",
    margin: 10,
  },
  textViewStyle: {
    marginLeft: 100,
  },
});
