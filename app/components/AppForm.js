import React from "react";
import { Formik } from "formik";
import { StyleSheet, Text, View } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import colors from "../config/colors";

export default function AppForm({
  children,
  formTitle,
  initialErrors,
  initialValues,
  onSubmit,
  style,
  validationSchema,
}) {
  return (
    <View style={[styles.formContainer, style]}>
      <Formik
        initialValues={initialValues}
        initialErrors={initialErrors}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <React.Fragment>
          {formTitle && (
            <View>
              <Text style={styles.formTitle}>{formTitle}</Text>
              <LinearGradient
                colors={[colors.primary, colors.secondary]}
                style={styles.gradient}
                start={[0, 1]}
                end={[1, 0]}
              />
            </View>
          )}
          {children}
        </React.Fragment>
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    margin: 10,
  },
  formTitle: {
    color: "white",
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
  },
  gradient: {
    alignSelf: "center",
    borderRadius: 5,
    height: 10,
    marginTop: 20,
    marginBottom: 50,
    width: "60%",
  },
  icon: {
    alignSelf: "center",
  },
});
