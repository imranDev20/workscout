import React, { useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Feather } from "@expo/vector-icons";
import { jobData } from "@/constants/data";
import JobItem from "@/components/home/JobItem";
import { dismissKeyboard } from "@/lib/functions";
import SearchInputField from "@/components/home/SearchInputField";

// This could be exported as a separate component if needed
const SearchFilters = () => {
  return (
    <>
      <View className="flex-row justify-between items-center mx-4 my-2">
        <TouchableOpacity className="flex-row items-center">
          <Text className="text-gray-600 mr-1">Most Relevant</Text>
          <Feather name="chevron-down" size={16} color="#9ca3af" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center">
          <Ionicons
            name="location-outline"
            size={16}
            color="#9ca3af"
            className="mr-1"
          />
          <Text className="text-gray-600">Jakarta, Indonesia</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row mx-4 my-3 gap-2">
        <TouchableOpacity className="border border-gray-300 rounded-lg items-center justify-center px-5 py-2">
          <View className="flex-row items-center gap-2">
            <Ionicons name="options-outline" size={18} color="#333" />
            <Text className="text-gray-700">Filter</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="flex-1 border border-gray-300 rounded-lg flex-row items-center justify-between px-3 py-2">
          <Text className="text-gray-700">Job Role</Text>
          <Feather name="chevron-down" size={16} color="#9ca3af" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-1 border border-gray-300 rounded-lg flex-row items-center justify-between px-3 py-2">
          <Text className="text-gray-700">Work Arrangement</Text>
          <Feather name="chevron-down" size={16} color="#9ca3af" />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default function SearchScreen(): React.ReactElement {
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <SafeAreaView
        className="flex-1 bg-white"
        edges={["top", "left", "right"]}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-1"
        >
          <FlatList
            data={jobData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <JobItem item={item} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
            ListHeaderComponent={() => (
              <>
                <SearchInputField />
                <SearchFilters />

                {/* Jobs Available count */}
                <View className="mx-4 my-3">
                  <Text className="text-2xl font-bold text-gray-800">
                    20 Jobs Available
                  </Text>
                </View>
              </>
            )}
            testID="job-list"
            initialNumToRender={4}
            removeClippedSubviews={false}
            keyboardShouldPersistTaps="handled"
            scrollEventThrottle={16}
            snapToAlignment="start"
            decelerationRate="normal"
            onStartShouldSetResponder={() => true}
            onStartShouldSetResponderCapture={() => true}
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
