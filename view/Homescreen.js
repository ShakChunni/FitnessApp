import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useContext } from "react";
import Fitnesscards from "../controller/FitnessCards";
import { FitnessItems } from "../model/States";
import { StatusBar } from "expo-status-bar";
const Homescreen = () => {
  const { minutes, calories, workout } = useContext(FitnessItems);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <StatusBar style="auto" translucent={false} backgroundColor="#FFFFFF" />
      <View style={styles.heading}>
        <Text
          style={{
            color: "#B4FEE7",
            fontStyle: "italic",
            fontWeight: "900",
            fontSize: 30,
          }}
        >
          PowerFitness
        </Text>
        <View style={styles.firstContainerTexts}>
          <View>
            <Text style={styles.insideText1}>{workout}</Text>
            <Text style={styles.insideText2}>WORKOUTS</Text>
          </View>

          <View>
            <Text style={styles.insideText1}>{calories}</Text>
            <Text style={styles.insideText2}>KCAL</Text>
          </View>

          <View>
            <Text style={styles.insideText1}>{minutes}</Text>
            <Text style={styles.insideText2}>MINS</Text>
          </View>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            style={{
              width: "90%",
              height: 120,
              marginTop: 20,
              borderRadius: 7,
            }}
            source={{
              uri: "https://img.freepik.com/free-photo/beautiful-young-female-athlete-practicing-pink-studio-wall-monochrome-portrait_155003-34085.jpg?w=1380&t=st=1681812571~exp=1681813171~hmac=5683ca0752fb8a2a8e034782d1e2a6a9ab4449ee4a5bc3b40e3fff910c3514ec",
            }}
          />
        </View>
      </View>

      <View style={styles.fitnessCardStyle}>
        <Fitnesscards />
      </View>
    </ScrollView>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  fitnessCardStyle: {
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 75,
  },
  heading: {
    backgroundColor: "#FD49A0",
    padding: 10,
    height: 200,
    width: "100%",
  },
  firstContainerTexts: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 25,
  },
  insideText1: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#B4FEE7",
    fontSize: 18,
  },
  insideText2: {
    color: "#B4FEE7",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 6,
  },
});
