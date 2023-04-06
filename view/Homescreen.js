import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import Fitnesscards from "../controller/Fitnesscards";

const Homescreen = () => {
  return (
    <ScrollView style={styles.firstContainer}>
      <View>
        <View style={styles.heading}>
          <Text style={{ color: "#281C2D", fontWeight: "bold", fontSize: 25 }}>
            Home Workout
          </Text>
          <View style={styles.firstContainerTexts}>
            <View>
              <Text style={styles.insideText1}>0</Text>
              <Text style={styles.insideText2}>WORKOUTS</Text>
            </View>

            <View>
              <Text style={styles.insideText1}>0</Text>
              <Text style={styles.insideText2}>KCAL</Text>
            </View>

            <View>
              <Text style={styles.insideText1}>0</Text>
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
                uri: "https://img.freepik.com/free-photo/abs-beautiful-young-female-athlete-practicing-studio-monochrome-purple-portrait_155003-40836.jpg?w=1380&t=st=1680815341~exp=1680815941~hmac=309f6b14ee26fbb92af857164060b5c571c0768860201e3e8da61255420118e1",
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.fitnessCardStyle}><Fitnesscards /></View>
    </ScrollView>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  firstContainer: {
    marginTop: 50,
  },
  fitnessCardStyle:{
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 75,
  } ,
  heading: {
    backgroundColor: "#A020F0",
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
    color: "#281C2D",
    fontSize: 18,
  },
  insideText2: {
    color: "#BEAFC2",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 6,
  },
});
