import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
const ListItem = ({ item, deleteItem }) => {
  return (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => deleteItem(item.id)}
    >
      {/* item은 원래 존재하는 prop이다. 딴 거 쓰면 안됨. 한참 고민했다..... */}
      <Text>{item.text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
});
export default ListItem;
