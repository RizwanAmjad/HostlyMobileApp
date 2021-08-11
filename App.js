import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import jwtDecode from "jwt-decode";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";

import navigationTheme from "./app/navigation/navigationTheme";
import FeedScreen from "./app/screens/FeedScreen";
import AppLoading from "./app/components/AppLoading";

import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";

export default function App() {
  const [user, setUser] = useState();
  const [isGuest, setIsGuest] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (token) setUser(jwtDecode(token));
    setIsReady(true);
  };

  if (!isReady) {
    restoreToken();
    return <AppLoading />;
  }

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
