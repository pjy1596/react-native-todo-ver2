import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import AddGoals from "./components/AddGoals";

export default function App() {
  const [goals, setGoals] = useState([{ text: "aaa" }, { text: "bbb" }]);
  const addItem = (type) => {
    if (!type) {
      Alert.alert("Error", "Please enter an item", [{ text: "ok" }]);
      console.log("bbb");
    } else {
      console.log("aaa");
      setGoals((prevItems) => {
        return [{ text: type }, ...prevItems];
      });
    }
  };
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <AddGoals addItem={addItem} />
        <FlatList
          data={goals}
          renderItem={({ goal }) => (
            <TouchableOpacity>
              <Text>{goal.text}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});
