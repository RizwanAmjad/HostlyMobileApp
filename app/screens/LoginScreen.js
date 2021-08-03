import React from "react";
import { StyleSheet } from "react-native";

import * as yup from "yup";

import AppButton from "../components/AppButton";
import AppForm from "../components/AppForm";
import AppTextInput from "../components/AppTextInput";
import NavigationLink from "../components/NavigationLink";
import Screen from "../components/Screen";

const validationSchema = yup.object().shape({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(8).label("Password"),
});

function LoginScreen({ navigation }) {
  return (
    <Screen>
      <AppForm
        icon="account-key"
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
          icon="form-textbox-password"
          name="password"
          secureTextEntry={true}
          placeholder="Password"
          style={styles.input}
        />
        <AppButton title="Login" icon="login" />
        <NavigationLink
          text="Not a user? Register now!"
          onPress={() => navigation.navigate("Register")}
        />
      </AppForm>
    </Screen>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  input: {
    marginBottom: 5,
  },
});
