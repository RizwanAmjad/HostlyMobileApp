import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppButton({ icon, title, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      {icon && (
        <MaterialCommunityIcons
          color="gray"
          name={icon}
          size={15}
          style={styles.icon}
        />
      )}
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    padding: 5,
    borderColor: "gray",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },
  icon: {
    marginRight: 5,
  },
  text: { color: "black" },
});

export default AppButton;
