import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

const SectionTitle = ({ title }: { title: string }) => (
  <Text className="text-xl font-bold mb-4">{title}</Text>
);

const CompanyDetailsScreen = () => {
  const navigation = useNavigation();

  // Company data
  const company = {
    name: "Netflix",
    location: "Los Gatos, California, United States",
    employees: "12,800",
    category: "Entertainment, Streaming Service",
    rating: "4.2/5 (12,800 reviews)",
    about:
      "Netflix is a leading entertainment company that provides on-demand video streaming services. Founded in 1997, Netflix initially operated as a DVD rental service by mail before transitioning into a streaming platform in 2007. Today, Netflix offers a wide variety of content, including movies, TV shows, documentaries, and self-produced original programs known as Netflix Originals. The service is available in over 190 countries and is used by millions of subscribers worldwide.",
    culture: [
      {
        title: "Innovation-Driven:",
        description:
          "Employees are encouraged to think outside the box, embrace creativity, and continuously push the boundaries of what's possible.",
      },
      {
        title: "Freedom and Responsibility:",
        description:
          "Netflix provides significant autonomy to its employees, allowing them to make decisions independently while expecting them to take ownership of their actions and outcomes.",
      },
      {
        title: "Outcome-Oriented:",
        description:
          "The company prioritizes results over processes, focusing on the effectiveness of work rather than the steps taken to achieve it.",
      },
    ],
    jobs: [
      {
        title: "Software Engineer",
        location: "Jakarta, Indonesia - Onsite",
        tags: ["Remote", "Contract", "Junior"],
      },
      {
        title: "Content Acquisition Manager",
        location: "Jakarta, Indonesia - Onsite",
        tags: ["Remote", "Full-time", "Senior"],
      },
      {
        title: "UI/UX Designer",
        location: "Jakarta, Indonesia - Onsite",
        tags: ["Remote", "Contract", "Junior"],
      },
      {
        title: "Data Scientist",
        location: "Jakarta, Indonesia - Onsite",
        tags: ["Remote", "Full-time", "Senior"],
      },
    ],
  };

  // Footer action buttons
  const ActionFooter = () => (
    <View
      className="absolute bottom-0 left-0 right-0 flex-row px-4 pt-5 pb-8 bg-white border-t border-gray-200"
      style={{
        elevation: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
      }}
    >
      <TouchableOpacity className="mr-3 rounded-lg p-4 items-center justify-center w-16">
        <Feather name="phone-outgoing" size={24} color="#666" />
      </TouchableOpacity>

      <TouchableOpacity className="flex-1 bg-slate-600 py-4 rounded-lg items-center justify-center">
        <Text className="text-white font-medium">Follow</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />

      {/* Header with back button and title */}
      <View className="flex-row items-center justify-between px-4 py-2 border-b border-gray-200">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="p-2"
          hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
        >
          <Feather name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text className="text-lg font-medium">About Company</Text>
        <TouchableOpacity className="p-2">
          <Feather name="bookmark" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Company Basic Info Section */}
        <View className="px-4 py-4">
          {/* Logo and Company Name */}
          <View className="flex-row items-center mb-4">
            <View className="mr-4 bg-slate-100 p-2 rounded-md">
              <View className="w-16 h-16 bg-red-600 rounded items-center justify-center">
                <Text className="text-white text-xl font-bold">N</Text>
              </View>
            </View>
            <View className="flex-1">
              <Text className="text-2xl font-bold">{company.name}</Text>
              <Text className="text-gray-700 font-medium">
                {company.category}
              </Text>
            </View>
          </View>

          {/* Location */}
          <View className="py-2 flex-row items-center">
            <Feather name="map-pin" size={20} color="#666" />
            <Text className="text-gray-600 ml-2">{company.location}</Text>
          </View>

          {/* Employees */}
          <View className="py-2 flex-row items-center">
            <Feather name="users" size={20} color="#666" />
            <Text className="text-gray-600 ml-2">
              {company.employees} Employees
            </Text>
          </View>

          {/* Rating */}
          <View className="py-2 flex-row items-center">
            <Feather name="star" size={20} color="#666" />
            <Text className="text-gray-600 ml-2">{company.rating}</Text>
          </View>
        </View>

        {/* Divider */}
        <View className="border-t border-gray-200 my-2" />

        {/* About Netflix Section */}
        <View className="px-4 py-4">
          <SectionTitle title="About Netflix" />
          <Text className="text-gray-700">{company.about}</Text>
        </View>

        {/* Company Culture Section */}
        <View className="px-4 py-4 border-t border-gray-200">
          <SectionTitle title="Company Culture" />

          {company.culture.map((item, index) => (
            <View key={index} className="mb-4">
              <BulletItem text={`${item.title} ${item.description}`} />
            </View>
          ))}
        </View>

        {/* Jobs at Netflix Section */}
        <View className="px-4 py-4 border-t border-gray-200">
          <SectionTitle title="Work at Netflix" />

          {company.jobs.map((job, index) => (
            <TouchableOpacity
              key={index}
              className="flex-row items-center mb-5 border-b border-gray-100 pb-5"
              activeOpacity={0.7}
            >
              <View className="w-12 h-12 bg-red-600 rounded items-center justify-center mr-3">
                <Text className="text-white font-bold">N</Text>
              </View>

              <View className="flex-1">
                <Text className="text-lg font-bold">{job.title}</Text>
                <Text className="text-gray-500">{job.location}</Text>

                <View className="flex-row mt-3 flex-wrap">
                  {job.tags.map((tag, idx) => (
                    <View
                      key={idx}
                      className="bg-white border border-gray-200 rounded-full px-4 py-1 mr-2 mb-2"
                    >
                      <Text className="text-gray-600">{tag}</Text>
                    </View>
                  ))}
                </View>
              </View>

              <TouchableOpacity className="p-2">
                <Feather name="chevron-right" size={24} color="#666" />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Add the action footer */}
      <ActionFooter />
    </SafeAreaView>
  );
};

// Helper component for bullet points
const BulletItem = ({ text }: { text: string }) => (
  <View className="flex-row mb-2">
    <Text className="mr-2">•</Text>
    <Text className="text-gray-700 flex-1">{text}</Text>
  </View>
);

export default CompanyDetailsScreen;
