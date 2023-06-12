import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
const RestScreen = () => {
  const navigation = useNavigation();
  let timer = 0;
  const [timeLeft, setTimeLeft] = useState(5);
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
    <View>
      <StatusBar style="auto" translucent={false} backgroundColor="#FFFFFF" />
      <Image
        source={require("../assets/images/relax-after-exercise_1150-13244.jpg")}
        style={styles.restImageStyle}
      />
      <Text style={styles.textStyle}>TAKE A REST!</Text>
      <Text style={styles.textStyle}>{timeLeft}</Text>
    </View>
  );
};

export default RestScreen;

const styles = StyleSheet.create({
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
