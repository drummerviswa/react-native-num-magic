import { Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "../router/TabNavigator";
import { TextColor } from "../assets/style/Colors";
import Lottie from "lottie-react-native";

const Home = () => {
  return (
    <View
      style={{
        backgroundColor: TextColor,
        height: "100%",
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
      }}
    >
      <View
        style={{
          paddingTop: 15,
          backgroundColor: TextColor,
          borderTopLeftRadius: 18,
          borderTopRightRadius: 18,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 50,
          }}
        >
          Number Magic
        </Text>
      </View>
      <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
        <Lottie
          speed={0.8}
          source={require("../assets/MagicB.json")}
          autoPlay
          style={{ width: 50, height: 50 }}
          loop
        />
        <View></View>
        <Lottie
          speed={0.8}
          source={require("../assets/Numbers.json")}
          style={{ width: 50, height: 50 }}
          autoPlay
          loop
        />
      </View>
      <TabNavigator />
    </View>
  );
};

export default Home;
