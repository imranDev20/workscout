import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "expo-router";

// Define types for our notification data
type NotificationType =
  | "application_sent"
  | "job_notification"
  | "application_review"
  | "interview"
  | "profile_viewed";

interface NotificationItem {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  company?: string;
  actionLabel?: string;
  time: string;
  read: boolean;
}

const NotificationsScreen: React.FC = () => {
  const navigation = useNavigation();
  // Sample notifications data
  const [notifications, setNotifications] = useState<NotificationItem[]>([
    {
      id: "1",
      type: "application_sent",
      title: "Application Sent",
      message:
        "Applications for Telegram companies have entered for company review",
      time: "25 minutes ago",
      read: false,
    },
    {
      id: "2",
      type: "job_notification",
      title: "Your job notification",
      message: "Nabilla, there are 8 new jobs for",
      company: "UI/UX Designer",
      actionLabel: "See new job",
      time: "2 Hour",
      read: false,
    },
    {
      id: "3",
      type: "application_review",
      title: "Your job notification",
      message: "Applications for Skype have entered for company review",
      actionLabel: "Application details",
      time: "1 Day",
      read: false,
    },
    {
      id: "4",
      type: "interview",
      title: "Interview Scheduled",
      message: "You have an upcoming interview with Adobe for the position of",
      company: "Senior UI Designer",
      actionLabel: "View details",
      time: "3 Hours",
      read: true,
    },
    {
      id: "5",
      type: "profile_viewed",
      title: "Profile Viewed",
      message:
        "Microsoft has viewed your profile for the UX Researcher position",
      time: "2 Days ago",
      read: true,
    },
  ]);

  // Function to mark notification as read
  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  // Function to mark all notifications as read
  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({ ...notification, read: true }))
    );
  };

  // Function to render the notification icon based on type
  const renderNotificationIcon = (type: NotificationType) => {
    switch (type) {
      case "application_sent":
        return (
          <Ionicons name="paper-plane-outline" size={20} color="#3498DB" />
        );
      case "job_notification":
        return <Ionicons name="briefcase-outline" size={20} color="#9B59B6" />;
      case "application_review":
        return <Ionicons name="list-outline" size={20} color="#2ECC71" />;
      case "interview":
        return <Ionicons name="calendar-outline" size={20} color="#E67E22" />;
      case "profile_viewed":
        return <Ionicons name="eye-outline" size={20} color="#34495E" />;
      default:
        return (
          <Ionicons name="notifications-outline" size={20} color="#7F8C8D" />
        );
    }
  };

  // Function to get background color based on notification type
  const getIconBackgroundColor = (type: NotificationType) => {
    switch (type) {
      case "application_sent":
        return "bg-blue-50";
      case "job_notification":
        return "bg-purple-50";
      case "application_review":
        return "bg-green-50";
      case "interview":
        return "bg-orange-50";
      case "profile_viewed":
        return "bg-gray-50";
      default:
        return "bg-gray-50";
    }
  };

  // Function to count unread notifications
  const unreadCount = notifications.filter((item) => !item.read).length;

  // Function to render each notification item
  const renderNotificationItem = ({ item }: { item: NotificationItem }) => (
    <Pressable
      onPress={() => markAsRead(item.id)}
      className={`flex-row mb-1 px-4 py-4 ${
        !item.read ? "bg-blue-50" : "bg-white"
      }`}
    >
      {!item.read && (
        <View className="w-2 h-2 bg-blue-500 rounded-full absolute top-5 left-1" />
      )}

      <View
        className={`w-12 h-12 rounded-full items-center justify-center ${getIconBackgroundColor(
          item.type
        )}`}
      >
        {renderNotificationIcon(item.type)}
      </View>

      <View className="ml-3 flex-1">
        <Text
          className={`text-base ${
            !item.read ? "font-semibold" : "font-medium"
          }`}
        >
          {item.title}
        </Text>

        <View className="mt-1 mb-1">
          <Text className="text-gray-600">
            {item.message}
            {item.company && (
              <Text className="text-slate-700 font-medium">
                {" "}
                {item.company}
              </Text>
            )}
            {item.type === "job_notification" && item.company && (
              <Text className="text-gray-600"> in California, USA</Text>
            )}
          </Text>
        </View>

        <View className="flex-row justify-between items-center mt-2">
          <Text className="text-gray-400 text-sm">{item.time}</Text>

          {item.actionLabel && (
            <TouchableOpacity className="py-2 px-4 bg-blue-50 rounded-lg">
              <Text className="text-blue-600 font-medium">
                {item.actionLabel}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Pressable>
  );

  // Section separator
  const ItemSeparatorComponent = () => (
    <View className="h-px bg-gray-100 mx-4" />
  );

  // Header component with centered "Mark all as read" button
  const HeaderComponent = () => (
    <View className="px-4 pt-4 pb-2">
      {unreadCount > 0 && (
        <View className="mb-4">
          <TouchableOpacity
            onPress={markAllAsRead}
            className="py-3 border border-blue-200 rounded-lg w-full"
          >
            <Text className="text-blue-600 font-medium text-center">
              Mark all as read
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "left", "right"]}>
      <StatusBar style="dark" />

      <View className="flex-row items-center px-4 py-2 border-b border-gray-100">
        <TouchableOpacity
          className="p-1"
          onPress={() => navigation.goBack()}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Feather name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <View className="flex-1 items-center">
          <Text className="text-lg font-semibold">Notifications</Text>
        </View>
        <View style={{ width: 32 }} />
      </View>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderNotificationItem}
        ItemSeparatorComponent={ItemSeparatorComponent}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListHeaderComponent={HeaderComponent}
      />
    </SafeAreaView>
  );
};

export default NotificationsScreen;
