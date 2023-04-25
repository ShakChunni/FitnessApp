import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { FitnessItems } from "../model/Context";
import { AntDesign } from "@expo/vector-icons";

const WorkoutScreen = () => {
  const { completed, setCompleted } = useContext(FitnessItems);
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.firstContainer}
      >
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

        {route.params.excersises.map((item, index) => (
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
            {completed.includes(item.name) ? (
              <AntDesign name="checkcircle" size={24} color="black" />
            ) : null}
          </Pressable>
        ))}
      </ScrollView>

      <Pressable
        onPress={() =>
          navigation.navigate("Fit", {
            excersises: route.params.excersises,
          })
        }
        style={styles.bottomPressableStyle}
      >
        <Text style={styles.bottomPressableTextStyle}>START</Text>
      </Pressable>
    </>
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
    color: "#B4FEE7",
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
  bottomPressableStyle: {
    backgroundColor: "#FD49A0",
    padding: 10,
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 20,
    width: 180,
    borderRadius: 10,
  },
  bottomPressableTextStyle: {
    color: "#B4FEE7",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
