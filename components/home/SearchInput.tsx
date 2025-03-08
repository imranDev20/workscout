import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { dismissKeyboard } from "@/lib/functions";

const SearchInput = () => {
  return (
    <View className="px-4 py-3">
      <View className="flex-row items-center px-4 py-4 border border-gray-200 rounded-xl">
        <TextInput
          placeholder="Search Job..."
          className="flex-1 text-gray-700"
          placeholderTextColor="#9ca3af"
          returnKeyType="search"
          onSubmitEditing={dismissKeyboard}
        />
        <TouchableOpacity onPress={dismissKeyboard}>
          <Ionicons name="search" size={20} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchInput;
