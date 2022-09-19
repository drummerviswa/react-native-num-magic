import {
  Button,
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import Sessions from "../components/Sessions";
import {
  AppColor,
  BodyColor,
  Checkboxs,
  TextColor,
} from "../assets/style/Colors";

const Birth = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const sessions = [
    { id: "1", name: "Add 18 to Month" },
    { id: "2", name: "Multiply by 25" },
    { id: "3", name: "Subract 333" },
    { id: "4", name: "Multiply by 8" },
    { id: "5", name: "Subract 554" },
    { id: "6", name: "Divide 2" },
    { id: "7", name: "Add Birth Day" },
    { id: "8", name: "Multiply by 5" },
    { id: "9", name: "Add 692" },
    { id: "10", name: "Multiply by 20" },
    { id: "11", name: "Add only last two digit of Birth year" },
  ];
  const [number, onChangeNumber] = React.useState(null);
  const [result, setResult] = React.useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const handleonClick = (e) => {
    const evae = number - 32940;
    var res = 0;
    if (number <= 32940) {
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
            <Text style={styles.modalText}>mm-dd-yy</Text>
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
          justifyContent: "center",
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
          showsVerticalScrollIndicator={false}
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
            borderRadius: 10,
            padding: 10,
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
export default Birth;
