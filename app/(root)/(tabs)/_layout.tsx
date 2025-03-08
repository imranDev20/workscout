import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#2c3e50", // Dark blue for active icon
        tabBarInactiveTintColor: "#a0b0c0", // Light gray-blue for inactive icons
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0, // Remove the top border
          elevation: 0, // Remove shadow on Android
          shadowOpacity: 0, // Remove shadow on iOS
          height: 60, // Match height from your image
          backgroundColor: "white",
        },
        headerShown: false, // Remove header
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Feather size={24} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <Feather size={24} name="search" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarIcon: ({ color }) => (
            <Feather size={24} name="file-text" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Feather size={24} name="user" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
