import React from "react";
import { Formik } from "formik";
import { StyleSheet, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function AppForm({
  children,
  icon,
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
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              color="gray"
              size={150}
              style={styles.icon}
            />
          )}
          {children}
        </React.Fragment>
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: { margin: 10 },
  icon: { alignSelf: "center" },
});
