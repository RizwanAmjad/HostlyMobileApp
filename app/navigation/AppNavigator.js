import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FeedScreen from "../screens/FeedScreen";
import AccountScreen from "../screens/AccountScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

const TabNavigator = createBottomTabNavigator();

export default AppNavigator = () => (
  <TabNavigator.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: colors.primary,
      tabBarStyle: {
        backgroundColor: colors.black,
      },
    }}
  >
    <TabNavigator.Screen
      name="Hostel Ads"
      component={FeedScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons color={color} name="newspaper" size={size} />
        ),
      }}
    />
    {/* <TabNavigator.Screen name="Create Ad"/> */}
    <TabNavigator.Screen
      name="Account Details"
      component={AccountScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons color={color} name="account" size={size} />
        ),
      }}
    />
  </TabNavigator.Navigator>
);
