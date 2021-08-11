import React from "react";

import LottieView from "lottie-react-native";
import { StyleSheet } from "react-native";

function AppLoading() {
  return (
    <LottieView
      autoPlay
      loop
      source={require("../animations/loading.json")}
      style={styles.container}
    />
  );
}

export default AppLoading;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
});
