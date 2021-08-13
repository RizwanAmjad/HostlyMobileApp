import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FeedScreen from "../screens/FeedScreen";
import AccountScreen from "../screens/AccountScreen";
import CreatePostScreen from "../screens/CreatePostScreen";

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
    <TabNavigator.Screen
      component={CreatePostScreen}
      name="Create Post"
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons
            color={color}
            name="plus-circle-outline"
            size={60}
            style={{
              backgroundColor: colors.black,
              borderRadius: 60 / 2,
              paddingBottom: 20,
            }}
          />
        ),
      }}
    />
    <TabNavigator.Screen
      name="Account"
      component={AccountScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons color={color} name="account" size={size} />
        ),
      }}
    />
  </TabNavigator.Navigator>
);
