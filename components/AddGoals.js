import React, { useState } from "react";
import { TouchableOpacity, TextInput, Button, View } from "react-native";

const AddGoals = ({ addItem }) => {
  const [text, setText] = useState("");
  const onChanging = (value) => setText(value);
  return (
    <View>
      <TextInput
        placeholder="Course Goal..."
        value={text}
        onChangeText={onChanging}
        // 이거 그냥 onchange로 했다가 식겁함.
      ></TextInput>
      <TouchableOpacity>
        <Button title="ADD" onPress={() => addItem(text)}></Button>
      </TouchableOpacity>
    </View>
  );
};

export default AddGoals;
