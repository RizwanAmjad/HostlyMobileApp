import React from "react";
import { ImageBackground, Text, StyleSheet } from "react-native";

import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import colors from "../config/colors";

import useAuth from "../auth/useAuth";

const user = {
  name: "Rizwan Amjad",
  email: "rizwanamjad@gmail.com",
  phone_number: "090078601",
  date_created: new Date(Date.now()).toDateString(),
};

function AccountScreen(props) {
  const auth = useAuth();

  return (
    <ImageBackground
      blurRadius={10}
      source={require("../assets/images/fantasy.jpg")}
      style={styles.background}
    >
      <Screen style={styles.container}>
        <Text style={styles.text}>Name: {user.name}</Text>
        <Text style={styles.text}>Email: {user.email}</Text>
        <Text style={styles.text}>Phone No: {user.phone_number}</Text>
        <Text style={styles.text}>Date Created: {user.date_created}</Text>
        <AppButton title="Logout" onPress={() => auth.logout()} />
      </Screen>
    </ImageBackground>
  );
}

export default AccountScreen;

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
  },
  container: {
    justifyContent: "center",
  },
  text: {
    backgroundColor: colors.white,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopColor: colors.primary,
    borderLeftColor: colors.primary,
    borderRightColor: colors.secondary,
    borderBottomColor: colors.secondary,
    borderRadius: 15,
    borderWidth: 2,
    color: colors.secondary,
    fontSize: 20,
    margin: 5,
    opacity: 0.95,
    padding: 5,
    paddingHorizontal: 10,
  },
});
