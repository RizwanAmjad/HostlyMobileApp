import React from "react";
import { StyleSheet } from "react-native";

import * as yup from "yup";

import AppForm from "../components/AppForm";
import AppFormSubmit from "../components/AppFormSubmit";
import AppTextInput from "../components/AppTextInput";
import NavigationLink from "../components/NavigationLink";
import Screen from "../components/Screen";

import usersAPI from "../api/users";

const validationSchema = yup.object().shape({
  name: yup.string().required().label("Name"),
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(8).label("Password"),
  confirm_password: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .label("Confirm Password"),
  phone_number: yup
    .number()
    .required()
    .min(10 ** 9, "Phone Number must be 11 characters")
    .max(10 ** 10 - 1, "Phone Number must be 11 characters")
    .label("Phone Number"),
});

function RegisterScreen({ navigation }) {
  const handleSubmit = async ({
    name,
    email,
    password,
    confirm_password,
    phone_number,
  }) => {
    const response = await usersAPI.register(
      name,
      email,
      password,
      phone_number
    );

    console.log(response);

    if (!response.problem) {
      alert("You have been registered Successfully!");
    } else if (response.status === 400) {
      alert("Already Registered");
    } else {
      alert("Server Error");
    }
  };
  return (
    <Screen style={styles.container}>
      <AppForm
        formTitle="Register"
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirm_password: "",
          phone_number: "",
        }}
        initialErrors={{
          name: "",
          email: "",
          password: "",
          confirm_password: "",
          phone_number: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
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
          icon="lock"
          name="password"
          secureTextEntry={true}
          placeholder="Password"
          style={styles.input}
        />
        <AppTextInput
          icon="lock"
          name="confirm_password"
          secureTextEntry={true}
          placeholder="Confirm Password"
          style={styles.input}
        />
        <AppTextInput
          icon="lock"
          keyboardType="phone-pad"
          name="phone_number"
          placeholder="Phone Number"
          style={styles.input}
        />
        <AppFormSubmit title="Register" icon="check" style={styles.input} />
        <NavigationLink
          text="LOGIN NOW!"
          onPress={() => navigation.navigate("Login")}
        />
      </AppForm>
    </Screen>
  );
}

export default RegisterScreen;

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
