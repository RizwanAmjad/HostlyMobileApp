import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";

import { useFormikContext } from "formik";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppError from "./AppError";
import colors from "../config/colors";

function AppTextInput({ icon, name, style, ...otherProps }) {
  const { errors, setValues, values, touched, setFieldTouched } =
    useFormikContext();

  const handleChange = (text) => {
    values[name] = text;
    setValues(values);
  };
  return (
    <React.Fragment>
      <View style={[styles.inputContainer, style]}>
        {icon && (
          <MaterialCommunityIcons
            color={colors.primary}
            name={icon}
            size={15}
            style={styles.icon}
          />
        )}
        <TextInput
          onChangeText={handleChange}
          onBlur={() => setFieldTouched(name)}
          style={styles.textInput}
          value={values[name]}
          {...otherProps}
        />
      </View>
      {touched[name] && (
        <AppError errorMessage={errors[name]} style={styles.errorMessage} />
      )}
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  errorMessage: {
    padding: 5,
  },
  icon: {
    margin: 5,
  },
  inputContainer: {
    borderColor: colors.light,
    borderBottomWidth: 4,
    borderRadius: 5,
    flexDirection: "row",
    width: "100%",
  },
  textInput: {
    width: "100%",
  },
});

export default AppTextInput;
