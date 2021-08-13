import React, { useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";

import * as yup from "yup";

import AppFormSubmit from "../components/AppFormSubmit";
import AppForm from "../components/AppForm";
import AppImagePickerList from "../components/AppImagePickerList";
import AppPicker from "../components/AppPicker";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import citiesAPI from "../api/cities";
import { useState } from "react";

const validationSchema = yup.object().shape({
  title: yup.string().required().min(5).label("Title"),
  description: yup.string().required().min(10).label("Description"),
  address: yup.string().required().label("Address"),
  room_price: yup
    .number()
    .typeError("Room Price must be an integer.")
    .required()
    .label("Room Price"),
  images: yup.array().of(yup.string()).min(1).label("Images"),
  available_rooms: yup
    .number()
    .typeError("Avialable Rooms must be an integer.")
    .required()
    .label("Available Rooms"),
  city: yup.object().required().label("City"),
});

function CreatePostScreen(props) {
  const [cities, setCities] = useState([]);
  const getAllCities = async () => {
    const { data: cities } = await citiesAPI.getCities();
    setCities(cities);
    console.log(cities);
  };
  useEffect(() => {
    getAllCities();
  }, []);

  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <Screen>
      <ScrollView>
        <AppForm
          formTitle="Create Post"
          initialValues={{
            title: "",
            description: "",
            address: "",
            room_price: "",
            available_rooms: "",
            city: "",
            images: [],
          }}
          initialErrors={{
            title: "",
            description: "",
            address: "",
            room_price: "",
            available_rooms: "",
            city: "",
            images: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <AppTextInput
            icon="format-title"
            name="title"
            placeholder="Title"
            style={styles.input}
          />
          <AppTextInput
            icon="details"
            name="description"
            multiline
            placeholder="Description"
            style={styles.input}
          />

          <AppTextInput
            icon="home-city"
            name="address"
            placeholder="Address"
            style={styles.input}
          />

          <AppTextInput
            icon="cash-100"
            keyboardType="number-pad"
            name="room_price"
            placeholder="Room Price"
            style={styles.input}
          />

          <AppTextInput
            icon="alpha-o-box"
            keyboardType="number-pad"
            name="available_rooms"
            placeholder="Available Rooms"
            style={styles.input}
          />
          <AppPicker
            items={cities}
            icon="city"
            name="city"
            displayAttribute="city_name"
            placeholder="Select City"
            style={styles.input}
          />
          <AppImagePickerList name="images" style={styles.input} />
          <AppFormSubmit title="Post" style={styles.input} />
        </AppForm>
      </ScrollView>
    </Screen>
  );
}

export default CreatePostScreen;

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
