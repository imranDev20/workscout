import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Filters = () => {
  return (
    <View className="flex-row justify-between items-center px-4 py-2">
      <TouchableOpacity className="flex-row items-center">
        <Text className="text-gray-700 font-medium">Most Relevant</Text>
        <Ionicons name="chevron-down" size={16} color="#555" className="ml-1" />
      </TouchableOpacity>

      <TouchableOpacity className="flex-row items-center">
        <Ionicons name="location-outline" size={16} color="#555" />
        <Text className="text-gray-700 ml-1">Jakarta, Indonesia</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Filters;
