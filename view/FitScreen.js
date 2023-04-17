import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
const FitScreen = () => {
  const route = useRoute();
  console.log(route.params);
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const excersises = route.params.excersises;
  const current = excersises[index];
  console.log(current, "first exercise");
  return (
    <View style={styles.firstContainer}>
      <Image style={styles.imageStyle} source={{ uri: current.image }} />
      <Text style={styles.excersiseNameStyle}>{current.name}</Text>
      <Text style={styles.excersiseSetStyle}>x{current.sets}</Text>

      <Pressable
      onPress={() => navigation.navigate("Rest") }
      style={styles.bottomPressableStyle}>
        <Text style={styles.bottomPressableTextStyle}>FINISHED</Text>
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
    height: 550,
  },
  excersiseNameStyle: {
    marginTop: 15,
    color: "purple",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  excersiseSetStyle: {
    marginTop: 5,
    color: "purple",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },
  bottomPressableStyle: {
    backgroundColor: "purple",
    padding: 12,
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 20,
    width: 150,
    borderRadius: 12,
  },
  bottomPressableTextStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  bottomSidePressableStyle: {
    backgroundColor: "purple",
    padding: 12,
    width: 90,
    borderRadius: 12,
  },
  bottomSidePressableTextStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
  },
});
