import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function NavigationLink({ style, text, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.link, style]}
      activeOpacity={0.4}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

export default NavigationLink;

const styles = StyleSheet.create({
  link: {
    alignItems: "center",
    marginTop: 5,
  },
  text: {
    color: "blue",
  },
});
