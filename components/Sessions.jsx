import { View, Text } from "react-native";
import CheckBox from "expo-checkbox";
import { Checkboxs, BodyColor } from "../assets/style/Colors";
const Sessions = ({ item }) => (
  <View
    style={{
      alignItems: "flex-start",
      flexDirection: "row",
      backgroundColor: BodyColor,
    }}
  >
    <CheckBox
      disabled={false}
      value={false}
      color={Checkboxs}
      onValueChange={() => (value = true)}
    />
    <Text style={{ fontSize: 24 }}> {item.name}</Text>
  </View>
);

export default Sessions;
