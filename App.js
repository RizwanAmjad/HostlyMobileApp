import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";

import navigationTheme from "./app/navigation/navigationTheme";
import FeedScreen from "./app/screens/FeedScreen";
import AuthContext from "./app/auth/context";

export default function App() {
  const [user, setUser] = useState();
  const [isGuest, setIsGuest] = useState(false);
  return (
    <AuthContext.Provider value={{ isGuest, user, setIsGuest, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        {isGuest ? (
          <React.Fragment>
            <FeedScreen />
          </React.Fragment>
        ) : user ? (
          <AppNavigator />
        ) : (
          <AuthNavigator />
        )}
        <StatusBar style="auto" />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
