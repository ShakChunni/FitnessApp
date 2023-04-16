import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
const FitScreen = () => {
  const route = useRoute();
  console.log(route.params);
  const [index, setIndex] = useState(0);
  const excersises = route.params.excersises;
  const current = excersises[index];
  console.log(current, "first exercise");
  return (
    <View style={styles.firstContainer}>
      <Image style={styles.imageStyle} source={{ uri: current.image }} />
      <Text style={styles.excersiseNameStyle}>{current.name}</Text>
      <Text style={styles.excersiseSetStyle}>x{current.sets}</Text>

      <Pressable style={styles.bottomPressableStyle}>
        <Text style={styles.bottomPressableTextStyle}>Done</Text>
      </Pressable>
    </View>
  );
};

export default FitScreen;

const styles = StyleSheet.create({
  firstContainer: {
    marginTop: 40,
  },
  imageStyle: {
    width: "100%",
    height: 450,
  },
  excersiseNameStyle: {
    marginTop: 15,
    color: "purple",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  excersiseSetStyle: {
    marginTop: 10,
    color: "purple",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
  bottomPressableStyle: {
    backgroundColor: "purple",
    padding: 10,
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 20,
    width: 180,
    borderRadius: 10,
  },
  bottomPressableTextStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
