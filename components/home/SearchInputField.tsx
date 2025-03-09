import { View, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { dismissKeyboard } from "@/lib/functions";

const SearchInputField = () => {
  return (
    <View className="px-4 py-3">
      <View className="flex-row items-center border border-gray-200 rounded-xl">
        {/* Increased hitbox for the TextInput by applying padding directly to it */}
        <TextInput
          placeholder="Search Job..."
          className="flex-1 text-gray-700 px-4 py-4"
          placeholderTextColor="#9ca3af"
          returnKeyType="search"
          onSubmitEditing={dismissKeyboard}
        />
        <TouchableOpacity onPress={dismissKeyboard} className="pr-4">
          <Ionicons name="search" size={20} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchInputField;
