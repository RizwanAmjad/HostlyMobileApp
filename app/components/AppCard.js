import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import colors from "../config/colors";
import AppButton from "./AppButton";

function AppCard({ address, image, name, title, room_price }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>User: {name}</Text>
      <Text style={[styles.text]}>
        {title} at Price {room_price} Rs
      </Text>
      <Text style={[styles.text]}>Address: {address}</Text>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <AppButton
        icon="heart"
        iconColor={colors.white}
        title="Check Details!"
        style={styles.button}
      />
    </View>
  );
}

export default AppCard;

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: colors.white,
    width: "40%",
    margin: 5,
  },
  text: {
    textAlign: "center",
    color: colors.white,
    margin: 2,
  },
  container: {
    backgroundColor: colors.background,
    borderRadius: 10,
    opacity: 0.9,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
    marginTop: 15,
  },
  title: {
    fontSize: 25,
  },
});
