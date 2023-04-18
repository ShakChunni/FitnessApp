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
        onPress={() => {
          navigation.navigate("Rest");
          setTimeout(() => {
            setIndex(index + 1);
          }, 2000);
        }}
        style={styles.bottomPressableStyle}
      >
        <Text style={styles.bottomPressableTextStyle}>FINISHED</Text>
      </Pressable>

      <Pressable style={styles.prevNextContainer}>
        <Pressable style={styles.prevNextContainerStyle}>
          <Text style={styles.prevNextContainerTextStyle}>PREV</Text>
        </Pressable>
        <Pressable style={styles.prevNextContainerStyle}>
          <Text style={styles.prevNextContainerTextStyle}>NEXT</Text>
        </Pressable>
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
    color: "#FD49A0",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  excersiseSetStyle: {
    marginTop: 5,
    color: "#FD49A0",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },
  bottomPressableStyle: {
    backgroundColor: "#FD49A0",
    padding: 12,
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 20,
    width: 150,
    borderRadius: 12,
  },
  bottomPressableTextStyle: {
    color: "#B4FEE7",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },

  prevNextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
  },

  prevNextContainerStyle: {
    marginHorizontal: 25,
    backgroundColor: "#FD49A0",
    padding: 6,
    borderRadius: 12,
    width: 80,
  },
  prevNextContainerTextStyle: {
    color: "#B4FEE7",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
