import React from "react";

import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.view, style]}>
      <React.Fragment>{children}</React.Fragment>
    </SafeAreaView>
  );
}

export default Screen;

const styles = StyleSheet.create({
  view: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
  },
});
