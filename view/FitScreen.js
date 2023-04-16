import { StyleSheet, Text, View, Image } from "react-native";
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
    </View>
  );
};

export default FitScreen;

const styles = StyleSheet.create({
  firstContainer: {
    marginTop: 50,
  },
  imageStyle: {
    width: "100%",
    height: 380,
  },
});
