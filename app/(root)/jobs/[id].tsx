import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import JobItem from "@/components/home/JobItem";
import { jobDetailsData, similarJobs } from "@/constants/data";
import { useRouter } from "expo-router";

interface JobDetailsProps {
  route?: any;
}

const SectionTitle = ({ title }: { title: string }) => (
  <Text className="text-xl font-bold mb-4">{title}</Text>
);

const BulletItem = ({ text }: { text: string }) => (
  <View className="flex-row mb-2">
    <Text className="mr-2">•</Text>
    <Text className="text-gray-700 flex-1">{text}</Text>
  </View>
);

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
      <Feather name="share-2" size={24} color="#666" />
    </TouchableOpacity>

    <TouchableOpacity className="flex-1 bg-slate-600 py-4 rounded-lg items-center justify-center">
      <Text className="text-white font-medium">Apply Now</Text>
    </TouchableOpacity>
  </View>
);

const JobDetailsScreen: React.FC<JobDetailsProps> = ({ route }) => {
  const navigation = useNavigation();
  const router = useRouter();

  const renderBulletSection = (title: string, items: string[]) => (
    <View className="px-4 py-4">
      <SectionTitle title={title} />
      {items.map((item, index) => (
        <BulletItem key={index} text={item} />
      ))}
    </View>
  );

  const renderHeader = () => (
    <>
      <View className="px-4 py-4 flex-row items-center">
        <View className="mr-4 bg-slate-100 p-2 rounded-md">
          <Image
            source={{ uri: jobDetailsData.logo }}
            className="w-16 h-16"
            resizeMode="contain"
          />
        </View>
        <View className="flex-1">
          <Text className="text-gray-700 font-medium">
            {jobDetailsData.company}
          </Text>
          <Text className="text-2xl font-bold">{jobDetailsData.position}</Text>
        </View>
      </View>

      <View className="px-4 py-2 flex-row items-center">
        <Feather name="map-pin" size={20} color="#666" />
        <Text className="text-gray-600 ml-2">{jobDetailsData.location}</Text>
      </View>

      <View className="px-4 py-2 flex-row items-center">
        <Feather name="dollar-sign" size={20} color="#666" />
        <Text className="text-gray-600 ml-2">{jobDetailsData.salary}</Text>
      </View>

      <View className="px-4 mt-4 flex-row border-t border-gray-200">
        <View className="flex-1 py-4 border-r border-gray-200 items-center">
          <Text className="text-gray-500 text-sm">Experience</Text>
          <Text className="text-gray-800 font-medium mt-1">
            {jobDetailsData.experience}
          </Text>
        </View>

        <View className="flex-1 py-4 border-r border-gray-200 items-center">
          <Text className="text-gray-500 text-sm">Job Type</Text>
          <Text className="text-gray-800 font-medium mt-1">
            {jobDetailsData.jobType}
          </Text>
        </View>

        <View className="flex-1 py-4 items-center">
          <Text className="text-gray-500 text-sm">Level</Text>
          <Text className="text-gray-800 font-medium mt-1">
            {jobDetailsData.level}
          </Text>
        </View>
      </View>

      <View className="px-4 py-2 border-t border-gray-200">
        <Text className="text-gray-500">
          Updated {jobDetailsData.updatedDays} days ago
        </Text>
      </View>

      <View className="mx-4 my-4 p-4 bg-yellow-50/50 rounded-xl">
        <Text className="text-gray-600 mb-2">This job post is managed by</Text>
        <View className="flex-row items-center">
          <Image
            source={{ uri: jobDetailsData.recruiter.avatar }}
            className="w-10 h-10 rounded-full"
          />
          <View className="ml-3">
            <Text className="text-gray-800 font-medium">
              {jobDetailsData.recruiter.name}
            </Text>
            <Text className="text-gray-500 text-sm">
              Online {jobDetailsData.recruiter.lastOnline}
            </Text>
          </View>
        </View>
      </View>

      <View className="px-4 py-2">
        <SectionTitle title="Must Have Skills" />
        <View className="flex-row flex-wrap">
          {jobDetailsData.skills.map((skill, index) => (
            <View
              key={index}
              className="mr-2 mb-2 px-4 py-2 border border-gray-200 rounded-full bg-white"
            >
              <Text className="text-gray-700">{skill}</Text>
            </View>
          ))}
        </View>
      </View>

      <View className="px-4 py-4">
        <SectionTitle title="Job Description" />
        <Text className="text-gray-700">{jobDetailsData.description}</Text>
      </View>

      {renderBulletSection(
        "Responsibilities:",
        jobDetailsData.responsibilities
      )}

      {renderBulletSection("Requirements:", jobDetailsData.requirements)}

      {renderBulletSection("Benefits:", jobDetailsData.benefits)}

      <View className="px-4 py-4 border-t border-gray-200">
        <SectionTitle title="About The Company" />

        <View className="flex-row items-center justify-between mb-3">
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "/companies/[id]",
                params: { id: jobDetailsData.companyInfo.id },
              })
            }
          >
            <View className="flex-row items-center">
              <View className="w-8 h-8 bg-red-600 rounded items-center justify-center mr-3">
                <Text className="text-white font-bold">N</Text>
              </View>
              <Text className="font-medium text-lg">
                {jobDetailsData.companyInfo.name}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "/companies/[id]",
                params: { id: jobDetailsData.companyInfo.id },
              })
            }
            className="p-3" // Increased padding here to make hitbox larger
          >
            <Feather name="chevron-right" size={20} color="#666" />
          </TouchableOpacity>
        </View>

        <View className="mb-2">
          <Text className="text-gray-600">
            {jobDetailsData.companyInfo.industry} ·{" "}
            {jobDetailsData.companyInfo.employees}
          </Text>
        </View>

        <View className="flex-row items-center mb-4">
          <Feather name="map-pin" size={16} color="#666" className="mr-2" />
          <Text className="text-gray-600">
            {jobDetailsData.companyInfo.address}
          </Text>
        </View>

        <View className="flex-row items-center mb-4">
          <Text className="text-blue-600">
            View more jobs from this company
          </Text>
        </View>
      </View>

      <View className="pt-4 pb-2 border-t border-gray-200">
        <View className="px-4">
          <SectionTitle title="Similar jobs for you" />
        </View>
      </View>
    </>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />

      <View className="flex-row items-center justify-between px-4 py-2 border-b border-gray-200">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="p-2" // Added padding to increase hit area
          hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
        >
          <Feather name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text className="text-lg font-medium">Details</Text>
        <TouchableOpacity className="p-2">
          <Feather name="bookmark" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={similarJobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <JobItem item={item} />}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      />

      <ActionFooter />
    </SafeAreaView>
  );
};

export default JobDetailsScreen;
