import React, { useRef } from "react";
import { ScrollView, StyleSheet, TouchableWithoutFeedback } from "react-native";

import { useFormikContext } from "formik";

import AppError from "./AppError";
import AppImagePicker from "./AppImagePicker";

import colors from "../config/colors";

function AppImagePickerList({ name, style }) {
  const scrollViewRef = useRef();

  const { errors, setValues, values, touched, setFieldTouched } =
    useFormikContext();

  const handleSelect = (imageUri) => {
    values[name] = [...values[name], imageUri];
    setValues(values);
  };

  const handleDelete = (uri) => {
    values[name] = values[name].filter((imageUri) => imageUri !== uri);
    setValues(values);
  };

  return (
    <TouchableWithoutFeedback onBlur={() => setFieldTouched(name)}>
      <React.Fragment>
        <ScrollView
          horizontal
          onContentSizeChange={() =>
            scrollViewRef.current.scrollToEnd({ animated: true })
          }
          ref={scrollViewRef}
          showsHorizontalScrollIndicator={false}
          style={[styles.imagesContainer, style]}
        >
          {values[name].map((imageUri) => (
            <AppImagePicker
              handleDelete={handleDelete}
              handleSelect={handleSelect}
              imageUri={imageUri}
              key={imageUri.toString()}
            />
          ))}
          <AppImagePicker
            handleDelete={handleDelete}
            handleSelect={handleSelect}
          />
        </ScrollView>
        {touched[name] && (
          <AppError errorMessage={errors[name]} style={styles.errorMessage} />
        )}
      </React.Fragment>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  imagesContainer: {
    flexDirection: "row",
    borderRadius: 10,
    borderBottomWidth: 4,
    borderBottomColor: colors.white,
    padding: 5,
  },
  errorMessage: {
    padding: 5,
  },
});

export default AppImagePickerList;
