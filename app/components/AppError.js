import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

export default function AppError({ errorMessage, style }) {
  if (!errorMessage) return null;
  return (
    <View style={[styles.errorContainer, style]}>
      <Text style={styles.errorMessage}>{errorMessage}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  errorMessage: {
    color: colors.primary,
  },
});
