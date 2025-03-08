import React from "react";
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
import { jobData } from "@/constants/jobs";
import ProfileHeader from "@/components/home/ProfileHeader";
import SearchInput from "@/components/home/SearchInput";
import Filters from "@/components/home/Filters";
import CuratedJobs from "@/components/home/CuratedJobs";
import Specializations from "@/components/home/Specializations";
import JobItem from "@/components/home/JobItem";
import { dismissKeyboard } from "@/lib/functions";

export default function Index(): React.ReactElement {
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <SafeAreaView className="flex-1 bg-white">
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
                <ProfileHeader />
                <SearchInput />
                <Filters />

                {/* Featured content card */}
                <View className="mx-4 my-6">
                  <TouchableOpacity>
                    <View className="bg-teal-600 rounded-2xl p-6">
                      <Text className="text-white text-xl font-medium mb-1">
                        10 ways to increase your
                      </Text>
                      <Text className="text-white text-xl font-medium mb-1">
                        chances of getting hired
                      </Text>
                      <View className="mt-4">
                        <TouchableOpacity className="bg-[#405D72] bg-opacity-30 self-start rounded-md px-4 py-2">
                          <Text className="text-white text-sm">
                            Read a blog
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>

                <CuratedJobs />
                <Specializations />

                <View className="mx-4 mt-2">
                  <Text className="text-2xl font-bold text-gray-800 mb-4">
                    Recommendations
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
