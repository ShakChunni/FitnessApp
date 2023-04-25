import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
const RestScreen = () => {
  const navigation = useNavigation();
  let timer = 0;
  const [timeLeft, setTimeLeft] = useState(30);
  const startTime = () => {
    setTimeout(() => {
      if (timeLeft <= 0) {
        navigation.goBack();
        clearTimeout(timer);
      }
      setTimeLeft(timeLeft - 1);
    }, 1000);
  };
  useEffect(() => {
    startTime();
    return () => clearTimeout(timer);
  });
  return (
    <View style={styles.firstContainer}>
      <Image
        source={{
          uri: "https://img.freepik.com/free-photo/relax-after-exercise_1150-13244.jpg?w=740&t=st=1681813233~exp=1681813833~hmac=870c3639a0f420006b6dada7a6cfa0e754b130d8efba957f467b314138e1e2b2",
        }}
        style={styles.restImageStyle}
      />
      <Text style={styles.textStyle}>TAKE A REST!</Text>
      <Text style={styles.textStyle}>{timeLeft}</Text>
    </View>
  );
};

export default RestScreen;

const styles = StyleSheet.create({
  firstContainer: {
    marginTop: 33,
  },
  restImageStyle: {
    width: "100%",
    height: 600,
  },
  textStyle: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
    color: "#FD49A0",
  },
});
