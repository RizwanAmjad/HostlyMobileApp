import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppImagePicker({ handleSelect, handleDelete, imageUri }) {
  const requestPermissions = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status) {
    }
  };
  useEffect(() => {
    requestPermissions();
  }, []);

  const addImage = async () => {
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync();
    if (cancelled) {
      return alert("Operation Cancelled by user...");
    }
    handleSelect(uri);
  };

  const deleteImage = () => {
    Alert.alert("Delete", "Do you want to delete this image?", [
      { text: "Yes", onPress: () => handleDelete(imageUri) },
      { text: "No" },
    ]);
  };

  return (
    <View style={styles.imagePickerContainer}>
      <TouchableWithoutFeedback
        onPress={() => {
          if (imageUri) deleteImage();
          else addImage();
        }}
      >
        <View style={styles.imagePicker}>
          {!imageUri && <MaterialCommunityIcons name="plus" size={20} />}
          {imageUri && (
            <Image source={{ uri: imageUri }} style={styles.image} />
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    margin: 5,
    borderRadius: 10,
    resizeMode: "cover",
  },
  imagePickerContainer: {
    flexDirection: "row",
  },
  imagePicker: {
    width: 50,
    height: 50,
    borderRadius: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AppImagePicker;
