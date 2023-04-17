import { StyleSheet, Text, View, Image } from "react-native";
import React, {useState} from "react";
import { useNavigation } from "@react-navigation/native";
const RestScreen = () => {
    const navigation = useNavigation();
    let timer = 0;
    const [timeLeft, setTimeLeft] = useState(30);
    const startTime = () => {
        setTimeout(() => {
            if(timeLeft <= 0) {
                navigation.goBack();
            }
        }, 1000)
    }
  return (
    <View style={styles.firstContainer}>
      <Image
        // resizeMode="contain"
        source={{
          uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_500:300,c_fit/dpr_2/image/carefit/bundle/CF01032_magazine_2.png",
        }}
        style={styles.restImageStyle}
      />
      <Text style={styles.textStyle}>TAKE A REST!</Text>
    </View>
  );
};

export default RestScreen;

const styles = StyleSheet.create({
  firstContainer: {
    marginTop: 40,
  },
  restImageStyle: {
    width: "100%",
    height: 550,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
});
