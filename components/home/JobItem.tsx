import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { JobItemType } from "@/types/job.types";
import { Ionicons } from "@expo/vector-icons";
import { dismissKeyboard } from "@/lib/functions";

const JobItem = ({ item }: { item: JobItemType }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9} // High value to make the tap less obvious but still provide feedback
      className="bg-white rounded-xl p-5 mx-4 mb-4 border border-gray-100 shadow-sm"
      delayPressIn={150}
      onPress={dismissKeyboard}
    >
      {/* Job card header with company info and bookmark */}
      <View className="flex-row justify-between items-start">
        {/* Company and position info - constrained width to prevent pushing bookmark out */}
        <View className="flex-row items-start flex-1 pr-2">
          {/* Company logo with fixed dimensions */}
          <View className="bg-gray-50 p-4 rounded-lg w-[58px] h-[58px] items-center justify-center">
            <Image
              source={{ uri: item.logo }}
              className="w-10 h-10"
              resizeMode="contain"
            />
          </View>

          {/* Job details */}
          <View className="ml-3 flex-1">
            <Text className="text-gray-600">{item.company}</Text>
            <Text className="text-xl font-bold">{item.position}</Text>
            <Text className="text-gray-500 mt-1">{item.location}</Text>

            {/* Tags/skills needed for the job */}
            <View className="flex-row mt-4 flex-wrap">
              {item.tags.map((tag, index) => (
                <View
                  key={index}
                  className="bg-white border border-gray-200 rounded-full px-4 py-1 mr-2 mb-2"
                >
                  <Text className="text-gray-600">{tag}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Bookmark button - now properly positioned */}
        {/* stopPropagation prevents the parent TouchableOpacity from activating */}
        <TouchableOpacity
          className="p-1"
          onPress={(e) => {
            e.stopPropagation();
            // Add your bookmark logic here
            console.log("Bookmark pressed");
          }}
        >
          <Ionicons name="bookmark-outline" size={24} color="#555" />
        </TouchableOpacity>
      </View>

      {/* Job card footer with time posted and view details button */}
      <View className="flex-row justify-between items-center mt-4">
        <Text className="text-gray-500">{item.timePosted}</Text>
        {/* stopPropagation prevents the parent TouchableOpacity from activating */}
        <TouchableOpacity
          onPress={(e) => {
            e.stopPropagation();
            // Add your view details logic here
            console.log("View details pressed");
          }}
        >
          <Text className="text-slate-600 font-medium">View Details</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default JobItem;
