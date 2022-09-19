import {
  View,
  Text,
  FlatList,
  TextInput,
  Button,
  Pressable,
  StyleSheet,
  Modal,
} from "react-native";
import React, { useState } from "react";
import Sessions from "../components/Sessions";
import { AppColor, BodyColor, Checkboxs } from "../assets/style/Colors";

const Phone = () => {
  const sessions = [
    { id: "1", name: "Enter first 3 digit of the no" },
    { id: "2", name: "Multiply by 40" },
    { id: "3", name: "Multiply by 25" },
    { id: "4", name: "Add next 3 digits" },
    { id: "5", name: "Multiply by 50" },
    { id: "6", name: "Add 1 to it" },
    { id: "7", name: "Multiply by 400" },
    { id: "8", name: "Add the last 2 digits" },
    { id: "9", name: "Add the last 2 digits again" },
  ];
  const [result, setResult] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleonClick = (e) => {
    const evae = number / 2 - 200;
    var res = 0;
    if (number <= 1000000000) {
      setResult(res);
    } else {
      setResult(evae);
    }
    console.log(result);
  };
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Modal
        animationType="slide"
        hardwareAccelerated={true}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{result}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Ok</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          paddingTop: 50,
          backgroundColor: BodyColor,
          paddingBottom: 50,
        }}
      >
        <FlatList
          data={sessions}
          renderItem={Sessions}
          keyExtractor={(item) => item.id}
        />
        <Text>Enter the Result</Text>
        <TextInput
          keyboardAppearance="dark"
          onChangeText={onChangeNumber}
          accessibilityHint="Enter your Result"
          value={number}
          placeholder="Result"
          keyboardType="numeric"
          style={{
            width: 200,
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
          }}
        />
        <Button
          color={AppColor}
          onPress={(ews) => {
            handleonClick(ews);
            setModalVisible(true);
          }}
          title="Submit"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 50,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 50,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: AppColor,
  },
  buttonClose: {
    backgroundColor: AppColor,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
export default Phone;
