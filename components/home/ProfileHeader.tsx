import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

const ProfileHeader = () => {
  return (
    <View className="flex-row justify-between items-center px-4 py-2">
      <Link href="/profile" asChild>
        <TouchableOpacity
          className="flex-row items-center active:opacity-70"
          activeOpacity={0.7}
        >
          <Image
            source={{
              uri: "https://randomuser.me/api/portraits/women/44.jpg",
            }}
            className="w-10 h-10 rounded-full"
          />
          <View className="ml-3">
            <Text className="text-lg font-semibold">Nabilla</Text>
            <View className="flex-row items-center">
              <Text className="text-gray-600 text-sm">UI/UX Designer</Text>
              <Ionicons
                name="chevron-down"
                size={16}
                color="#555"
                className="ml-1"
              />
            </View>
          </View>
        </TouchableOpacity>
      </Link>
      <TouchableOpacity
        activeOpacity={0.7}
        className="p-2 rounded-full active:bg-gray-100"
      >
        <Ionicons name="notifications-outline" size={24} color="#333" />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileHeader;
