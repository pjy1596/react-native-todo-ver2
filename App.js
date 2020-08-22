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
  Modal,
} from "react-native";
import AddGoals from "./components/AddGoals";
import ListItem from "./components/ListItem";
// modal 만드는 거 헷갈림 / 항상 web 말고 폰 화면도 봐야됨. 둘이 다르기 때문에.

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  // 이거 밑에 놨다고 앱 작동 안함

  const addItem = (type) => {
    if (!type) {
      Alert.alert("Error", "Please enter an item", [{ text: "ok" }]);
      console.log("bbb");
    } else {
      console.log("aaa");
      setGoals((prevItems) => {
        // key 안 써도 되긴 하는데 error 보기 싫어서 써줌
        return (
          setModalVisible(false),
          [{ id: Math.random(), text: type }, ...prevItems]
        );
      });
    }
  };
  const deleteItem = (id) => {
    setGoals((prevItems) => prevItems.filter((item) => item.id != id));
  };
  // 이 밑에 얘는 공식함수에는 있지만 이렇게 안 하고 직접 false true로 써줘도 됨
  const setModal = () => {
    setModalVisible(true);
  };
  const cancelItem = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles.screen}>
      <Button title="Add new goal" onPress={() => setModal()} />
      <AddGoals
        addItem={addItem}
        cancelItem={cancelItem}
        modalVisible={modalVisible}
        // 놀랍게도 modalVisible 얘도 prop으로 넘길 수 있다는 사실!
      />
      <FlatList
        data={goals}
        // {item}이라고 쓰면 destructruing임. 그냥 괄호에 쓰면 다르게 써야 됨
        // 또 막 key 설정하는 거 있기는 한데 귀찮아서 안함
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem}></ListItem>
        )}
      />
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
  listItem: {
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
});
