import React from "react";
import { Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";

function AppPickerItem({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    marginLeft: 15,
    marginTop: 15,
  },
  text: {
    fontSize: 15,
    color: "blue",
  },
});

export default AppPickerItem;
