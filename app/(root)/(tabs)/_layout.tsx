import React from "react";
import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  const bottomInset = Math.max(insets.bottom, 10);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#3b82f6", // Modern blue color
        tabBarInactiveTintColor: "#94a3b8", // Slate gray for inactive
        tabBarShowLabel: false,
        tabBarStyle: {
          height: Platform.OS === "ios" ? 50 + bottomInset : 60,
          paddingTop: 8,
          paddingBottom: Platform.OS === "ios" ? bottomInset : 8,
          backgroundColor: "white",
          borderTopWidth: 1,
          borderTopColor: "#e2e8f0", // Very subtle border
          elevation: 8, // Android shadow
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.05,
          shadowRadius: 4,
        },
        headerShown: false,
        tabBarItemStyle: {
          padding: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Feather size={22} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <Feather size={22} name="search" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarIcon: ({ color }) => (
            <Feather size={22} name="bookmark" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Feather size={22} name="user" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
