import React, { useContext, useEffect, useState } from "react";
import { ImageBackground, FlatList, StyleSheet } from "react-native";

import AppCard from "../components/AppCard";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import AuthContext from "../auth/context";

import hostelsAPI from "../api/hostels";
import backend from "../config/backend";

function FeedScreen(props) {
  const { isGuest, setIsGuest } = useContext(AuthContext);

  const [hostels, setHostels] = useState([]);

  const loadHostels = async () => {
    const response = await hostelsAPI.getHostels();
    if (!response.problem) {
      setHostels(response.data);
    }
  };
  useEffect(() => {
    loadHostels();
  }, []);

  return (
    <ImageBackground
      blurRadius={1}
      source={require("../assets/images/cloth.jpg")}
      style={styles.background}
    >
      <Screen>
        <FlatList
          data={hostels}
          keyExtractor={(item) => item._id.toString()}
          renderItem={({ item }) => {
            return (
              <AppCard
                address={item.address}
                image={`${backend.imagesURL}/${item.images[0]}`}
                name={item.name}
                room_price={item.room_price}
                title={item.title}
              />
            );
          }}
          style={styles.flatList}
        />
        {isGuest && (
          <AppButton
            title="Exit Guest Mode"
            style={styles.button}
            onPress={() => setIsGuest(false)}
          />
        )}
      </Screen>
    </ImageBackground>
  );
}

export default FeedScreen;

const styles = StyleSheet.create({
  background: {
    height: "100%",
    width: "100%",
  },
  button: {
    alignSelf: "center",
    marginVertical: 10,
    width: "90%",
  },
  flatList: {
    marginTop: 5,
  },
});
