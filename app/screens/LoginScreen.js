import React from "react";
import { StyleSheet } from "react-native";

import * as yup from "yup";

import AppForm from "../components/AppForm";
import AppFormSubmit from "../components/AppFormSubmit";
import AppTextInput from "../components/AppTextInput";
import NavigationLink from "../components/NavigationLink";
import Screen from "../components/Screen";

const validationSchema = yup.object().shape({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(8).label("Password"),
});

function LoginScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <AppForm
        formTitle="Login"
        initialValues={{ email: "", password: "" }}
        initialErrors={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        <AppTextInput
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          style={styles.input}
        />
        <AppTextInput
          icon="lock"
          name="password"
          secureTextEntry={true}
          placeholder="Password"
          style={styles.input}
        />
        <AppFormSubmit title="Login" icon="login" style={styles.input} />
        <NavigationLink
          text="SIGN UP NOW!"
          onPress={() => navigation.navigate("Register")}
        />
      </AppForm>
    </Screen>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  input: {
    marginBottom: 15,
    width: "80%",
    alignSelf: "center",
  },
});
