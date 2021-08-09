import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function AppButton({ icon, title, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      {icon && (
        <MaterialCommunityIcons
          color={colors.primary}
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
    alignItems: "center",
    backgroundColor: colors.dark,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    padding: 5,
    height: 40,
    width: "100%",
  },
  icon: {
    marginRight: 5,
  },
  text: { color: colors.white },
});

export default AppButton;
