import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Specializations = () => {
  return (
    <View className="mx-4 mt-2 mb-8">
      <Text className="text-2xl font-bold text-gray-800 mb-4">
        Specialization
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity className="bg-purple-50 rounded-xl p-4 mr-4 w-28">
          <View className="items-center justify-center">
            <Ionicons name="stats-chart" size={24} color="#8B5CF6" />
            <Text className="text-center mt-2 font-medium">Finance</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="bg-purple-50 rounded-xl p-4 mr-4 w-28">
          <View className="items-center justify-center">
            <Ionicons name="code-slash" size={24} color="#8B5CF6" />
            <Text className="text-center mt-2 font-medium">Technology</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="bg-purple-50 rounded-xl p-4 mr-4 w-28">
          <View className="items-center justify-center">
            <Ionicons name="megaphone" size={24} color="#8B5CF6" />
            <Text className="text-center mt-2 font-medium">Marketing</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="bg-purple-50 rounded-xl p-4 mr-4 w-28">
          <View className="items-center justify-center">
            <Ionicons name="briefcase" size={24} color="#8B5CF6" />
            <Text className="text-center mt-2 font-medium">Business</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="bg-purple-50 rounded-xl p-4 mr-4 w-28">
          <View className="items-center justify-center">
            <Ionicons name="people" size={24} color="#8B5CF6" />
            <Text className="text-center mt-2 font-medium">HR</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Specializations;
