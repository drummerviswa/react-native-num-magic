import { StyleSheet, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Birth from "../screens/Birth";
import Phone from "../screens/Phone";
import { AppColor, Checkboxs, TextColor } from "../assets/style/Colors";

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 18,
          textTransform: "none",
          borderRadius: 18,
        },
        tabBarStyle: { backgroundColor: AppColor, borderRadius: 18 },
        tabBarIndicatorStyle: {
          backgroundColor: TextColor,
          borderRadius: 18,
          width: 1,
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        },
        tabBarActiveTintColor: TextColor,
        tabBarPressColor: "hotpink",
        tabBarInactiveTintColor: "white",
      }}
    >
      <Tab.Screen name="Birth" component={Birth} />
      <Tab.Screen name="Phone" component={Phone} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
