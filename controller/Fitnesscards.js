import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import fitness from "../model/DataStored";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Fitnesscards = () => {
  const FitnessData = fitness;
  const navigation = useNavigation();
  return (
    <View>
      {FitnessData.map((item, key) => (
        <Pressable
          onPress={() =>
            navigation.navigate("Workout", {
              image: item.image,
              excersises: item.excersises,
              id: item.id,
            })
          }
          style={styles.pressable}
          key={key}
        >
          <Image style={styles.containers} source={{ uri: item.image }} />
          <Text style={styles.textStyle}>{item.name}</Text>
          <MaterialCommunityIcons
            style={styles.iconStyle}
            name="lightning-bolt"
            size={24}
            color="black"
          />
        </Pressable>
      ))}
    </View>
  );
};

export default Fitnesscards;

const styles = StyleSheet.create({
  pressable: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  containers: {
    width: "95%",
    height: 130,
    borderRadius: 7,
  },
  textStyle: {
    position: "absolute",
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
    left: 20,
    top: 20,
  },
  iconStyle: {
    position: "absolute",
    color: "#FFFFFF",
    left: 20,
    bottom: 15,
  },
});
