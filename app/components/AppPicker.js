import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFormikContext } from "formik";

import AppButton from "./AppButton";
import AppError from "./AppError";
import AppPickerItem from "./AppPickerItem";
import Screen from "./Screen";
import colors from "../config/colors";

function AppPicker({
  displayAttribute,
  icon,
  name,
  placeholder,
  items,
  style,
  ...otherProps
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState();

  const { errors, setValues, values, touched, setFieldTouched } =
    useFormikContext();

  const handleChange = (item) => {
    values[name] = item;
    setSelected(item);
    setValues(values);
  };

  return (
    <React.Fragment>
      <TouchableWithoutFeedback
        onPress={() => setModalVisible(true)}
        onBlur={() => setFieldTouched(name)}
      >
        <View style={[styles.inputContainer, style]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              color={colors.primary}
              size={20}
            />
          )}
          <Text style={styles.text}>
            {selected ? selected[displayAttribute] : placeholder}
          </Text>
          <MaterialCommunityIcons name="chevron-down" size={20} />
        </View>
      </TouchableWithoutFeedback>
      {touched[name] && (
        <AppError errorMessage={errors[name]} style={styles.errorMessage} />
      )}
      <Modal visible={modalVisible} animationType="slide" statusBarTranslucent>
        <Screen>
          <AppButton
            title="Close"
            onPress={() => setModalVisible(false)}
            style={styles.close}
          />
          <FlatList
            data={items}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <AppPickerItem
                title={item[displayAttribute]}
                onPress={() => {
                  handleChange(item);
                  setModalVisible(false);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  close: {
    width: "30%",
    alignSelf: "center",
  },
  icon: {
    margin: 5,
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: colors.background,
    borderRadius: 10,
    borderBottomWidth: 4,
    borderBottomColor: colors.white,
    padding: 5,
  },
  modal: {
    backgroundColor: colors.background,
  },
  outerContainer: {
    justifyContent: "center",
  },
  text: { flex: 1 },
});

export default AppPicker;
