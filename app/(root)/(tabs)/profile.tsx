import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import {
  documents,
  education,
  experiences,
  jobStats,
  languages,
  skills,
  user,
} from "@/constants/data";

interface ProfileProps {}

const ProfileScreen: React.FC<ProfileProps> = () => {
  // Sample profile data

  // Section title component with edit button
  const SectionTitle: React.FC<{ title: string }> = ({ title }) => (
    <View className="flex-row justify-between items-center mb-4">
      <Text className="text-lg font-semibold">{title}</Text>
      <TouchableOpacity className="p-1">
        <Feather name="edit-3" size={18} color="#666" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />

      {/* Header */}
      <View className="flex-row justify-between items-center px-5 py-2">
        <Text className="text-lg font-semibold">Details</Text>
        <TouchableOpacity className="p-1">
          <Feather name="settings" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1"
        contentContainerClassName="pb-8"
      >
        {/* Profile section */}
        <View className="items-center mt-3">
          <Image
            source={{ uri: user.avatar }}
            className="w-24 h-24 rounded-lg mb-4"
          />
          <View className="flex-row items-center mb-1">
            <Text className="text-2xl font-semibold mr-2">{user.name}</Text>
            <TouchableOpacity className="p-1">
              <Feather name="edit-3" size={16} color="#666" />
            </TouchableOpacity>
          </View>
          <Text className="text-gray-500 text-base mb-5">{user.location}</Text>
        </View>

        {/* Job Stats */}
        <View className="flex-row border-t border-b border-gray-200">
          {jobStats.map((stat, index) => (
            <View
              key={stat.status}
              className={`flex-1 py-4 items-center ${
                index !== jobStats.length - 1 ? "border-r border-gray-200" : ""
              }`}
            >
              <Text className="text-base font-semibold mb-1">
                {stat.count} Jobs
              </Text>
              <Text className="text-gray-500">{stat.status}</Text>
            </View>
          ))}
        </View>

        {/* Experience Section */}
        <View className="px-5 mt-6">
          <SectionTitle title="Experience" />

          {experiences.map((item) => (
            <View key={item.id} className="flex-row mb-4">
              <View
                className={`w-10 h-10 ${item.bgColor} rounded-lg items-center justify-center`}
              >
                <Text className="text-white font-bold">{item.logo}</Text>
              </View>
              <View className="ml-3 flex-1">
                <Text className="text-base font-semibold">{item.position}</Text>
                <Text className="text-gray-500">{item.company}</Text>
                <View className="flex-row justify-between mt-1">
                  <Text className="text-gray-500">{item.location}</Text>
                  <Text className="text-gray-500">{item.period}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Education Section */}
        <View className="px-5 mt-6">
          <SectionTitle title="Education" />

          {education.map((item) => (
            <View key={item.id} className="flex-row mb-4">
              <View
                className={`w-10 h-10 ${item.bgColor} rounded-lg items-center justify-center`}
              >
                <Text className="text-white font-bold">{item.logo}</Text>
              </View>
              <View className="ml-3 flex-1">
                <Text className="text-base font-semibold">{item.degree}</Text>
                <Text className="text-gray-500">{item.institution}</Text>
                <View className="flex-row justify-between mt-1">
                  <Text className="text-gray-500">{item.grade}</Text>
                  <Text className="text-gray-500">{item.period}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Skills Section */}
        <View className="px-5 mt-6">
          <SectionTitle title="Skill" />

          <View className="flex-row flex-wrap">
            {skills.map((skill) => (
              <View
                key={skill}
                className="bg-white border border-gray-200 rounded-lg px-4 py-2 mr-2 mb-2"
              >
                <Text className="text-gray-700">{skill}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Languages Section */}
        <View className="px-5 mt-6">
          <SectionTitle title="Language" />

          <View className="flex-row flex-wrap">
            {languages.map((language) => (
              <View
                key={language}
                className="bg-white border border-gray-200 rounded-lg px-4 py-2 mr-2 mb-2"
              >
                <Text className="text-gray-700">{language}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* CV Section */}
        <View className="px-5 mt-6">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-semibold">CV</Text>
            <TouchableOpacity className="flex-row items-center">
              <Text className="text-gray-600 mr-1">Make a CV</Text>
              <Feather name="plus" size={16} color="#666" />
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerClassName="pr-5"
          >
            {documents.map((doc) => (
              <View
                key={doc.id}
                className="flex-row items-center mr-4 border border-gray-200 px-3 py-5 rounded-xl bg-red-50/90 w-80"
              >
                <View className="w-10 h-12 items-center justify-center">
                  <Feather name="file-text" size={24} color="#E74C3C" />
                </View>
                <View className="ml-3 flex-1">
                  <Text className="text-base font-medium">{doc.name}</Text>
                  <Text className="text-gray-500 text-sm">
                    {doc.size} · {doc.date}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
