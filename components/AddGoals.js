import React, { useState } from "react";
import {
  TouchableOpacity,
  TextInput,
  Button,
  View,
  Modal,
  StyleSheet,
} from "react-native";

const AddGoals = ({ addItem, cancelItem, modalVisible }) => {
  const [text, setText] = useState("");
  const onChanging = (value) => setText(value);
  return (
    <Modal animationType="slide" visible={modalVisible}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal..."
          style={styles.input}
          value={text}
          onChangeText={onChanging}
          // 이거 그냥 onchange로 했다가 식겁함.
        ></TextInput>
        <TouchableOpacity style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD" onPress={() => addItem(text)}></Button>
          </View>
          <View style={styles.button}>
            <Button title="CANCEL" onPress={() => cancelItem()}></Button>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // 여기서 flex1 안하면 조그맣게 줄어들어 있다! 여기서 쓰는 것 기억하기
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});
export default AddGoals;
