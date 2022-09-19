import React from "react";
import Lottie from "lottie-react-native";
import { Text, View } from "react-native";

export default function Splash({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "white",
        width: "100%",
        height: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 25, textAlign: "center", color: "black" }}>
        Number Magic
      </Text>
      <Lottie
        speed={0.8}
        source={require("./assets/splash.json")}
        autoPlay
        loop={false}
        onAnimationFinish={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
}
