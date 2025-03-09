import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Keyboard,
  Image,
} from "react-native";
import React, { useState } from "react";
import { categories } from "@/constants/data";
import { jobData } from "@/constants/data";
import { Ionicons } from "@expo/vector-icons";
import { dismissKeyboard } from "@/lib/functions";
import { useRouter } from "expo-router";

const CuratedJobs = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Design");
  const router = useRouter();

  return (
    <>
      <View className="mx-4 mt-2 mb-4">
        <Text className="text-2xl font-bold text-gray-800">
          Curated Jobs For You
        </Text>

        {/* Category tabs - Horizontal scrolling tabs for job categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-4 mb-6"
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              onPress={() => setActiveCategory(category)}
              className={`mr-3 py-3 px-6 rounded-lg ${
                activeCategory === category
                  ? "bg-slate-600"
                  : "bg-white border border-gray-200"
              }`}
            >
              <Text
                className={`font-medium ${
                  activeCategory === category ? "text-white" : "text-gray-700"
                }`}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View className="w-full">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="pb-6"
          contentContainerStyle={{ paddingLeft: 16, paddingRight: 16 }}
        >
          {jobData.slice(0, 2).map((item) => (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.9}
              className="bg-white rounded-xl p-5 mr-4 border border-gray-100 shadow-sm w-64"
              onPress={() => {
                dismissKeyboard();
                router.push({
                  pathname: "/(root)/jobs/[id]",
                  params: { id: item.id },
                });
              }}
            >
              <View className="flex-row justify-between items-start">
                <View className="bg-gray-50 p-2 rounded-lg">
                  <Image
                    source={{ uri: item.logo }}
                    className="w-8 h-8"
                    resizeMode="contain"
                  />
                </View>
                <TouchableOpacity
                  className="p-1"
                  onPress={(e) => {
                    e.stopPropagation();
                    console.log("Bookmark pressed");
                  }}
                >
                  <Ionicons name="bookmark-outline" size={20} color="#555" />
                </TouchableOpacity>
              </View>

              <Text className="text-lg font-bold mt-3">{item.position}</Text>
              <Text className="text-gray-600 text-sm">{item.company}</Text>
              <Text className="text-gray-500 text-sm mt-1">
                {item.location}
              </Text>

              <View className="flex-row mt-3 flex-wrap">
                {item.tags.slice(0, 2).map((tag, index) => (
                  <View
                    key={index}
                    className="bg-white border border-gray-200 rounded-full px-3 py-1 mr-2 mb-1"
                  >
                    <Text className="text-gray-600 text-xs">{tag}</Text>
                  </View>
                ))}
              </View>

              <View className="flex-row justify-between items-center mt-3">
                <Text className="text-gray-500 text-xs">{item.timePosted}</Text>
                <Text className="text-slate-600 font-medium text-sm">
                  View Details
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default CuratedJobs;
