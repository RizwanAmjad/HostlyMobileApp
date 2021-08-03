import React from "react";
import { StyleSheet } from "react-native";

import * as yup from "yup";

import AppButton from "../components/AppButton";
import AppForm from "../components/AppForm";
import AppTextInput from "../components/AppTextInput";
import NavigationLink from "../components/NavigationLink";
import Screen from "../components/Screen";

const validationSchema = yup.object().shape({
  name: yup.string().required().label("Name"),
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(8).label("Password"),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .label("Confirm Password"),
});

function RegisterScreen({ navigation }) {
  return (
    <Screen>
      <AppForm
        icon="account-details"
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        initialErrors={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
      >
        <AppTextInput
          icon="account-minus"
          name="name"
          placeholder="Name"
          style={styles.input}
        />
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
        <AppTextInput
          icon="form-textbox-password"
          name="confirmPassword"
          secureTextEntry={true}
          placeholder="Confirm Password"
          style={styles.input}
        />
        <AppButton title="Register" icon="check" />
        <NavigationLink
          text="Already a user? Login!"
          onPress={() => navigation.navigate("Login")}
        />
      </AppForm>
    </Screen>
  );
}

export default RegisterScreen;

const styles = StyleSheet.create({
  input: {
    marginBottom: 5,
  },
});
