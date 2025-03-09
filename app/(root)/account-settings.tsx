import React from "react";
import { View, Text, TouchableOpacity, Switch, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

interface SettingItemProps {
  icon: React.ReactNode;
  title: string;
  hasToggle?: boolean;
  toggleValue?: boolean;
  onToggleChange?: (value: boolean) => void;
  onPress?: () => void;
}

const SettingItem: React.FC<SettingItemProps> = ({
  icon,
  title,
  hasToggle = false,
  toggleValue = false,
  onToggleChange,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row items-center justify-between py-4 border-b border-gray-100"
      disabled={hasToggle}
    >
      <View className="flex-row items-center">
        {icon}
        <Text className="text-gray-700 text-base ml-4">{title}</Text>
      </View>
      {hasToggle ? (
        <Switch
          value={toggleValue}
          onValueChange={onToggleChange}
          trackColor={{ false: "#D1D5DB", true: "#64748B" }}
          thumbColor="#FFFFFF"
        />
      ) : (
        <Ionicons name="chevron-forward" size={20} color="#94A3B8" />
      )}
    </TouchableOpacity>
  );
};

interface AccountSettingsScreenProps {}

const AccountSettingsScreen: React.FC<AccountSettingsScreenProps> = () => {
  const navigation = useNavigation();
  const [darkMode, setDarkMode] = React.useState(false);

  // Handle toggling dark mode
  const handleDarkModeToggle = (value: boolean) => {
    setDarkMode(value);
    // Here you would typically update app-wide theme state
  };

  // Mock handlers for navigation actions
  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleChangePassword = () => {
    // Navigate to change password screen
    console.log("Navigate to change password screen");
  };

  const handleContactSupport = () => {
    // Navigate to contact support screen
    console.log("Navigate to contact support screen");
  };

  const handleLogout = () => {
    // Handle logout logic
    console.log("Logging out user");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />

      {/* Header */}
      <View className="relative flex-row items-center px-5 py-4 border-b border-gray-100">
        <TouchableOpacity onPress={handleGoBack} className="z-10">
          <Ionicons name="chevron-back" size={24} color="#333" />
        </TouchableOpacity>
        <View className="absolute inset-0 flex items-center justify-center">
          <Text className="text-xl font-semibold text-gray-800">
            Account Settings
          </Text>
        </View>
      </View>

      {/* Settings List */}
      <ScrollView className="flex-1 px-5">
        <View className="py-4">
          {/* Change Password */}
          <SettingItem
            icon={<Feather name="lock" size={22} color="#333" />}
            title="Change Password"
            onPress={handleChangePassword}
          />

          {/* Contact Support */}
          <SettingItem
            icon={<Feather name="phone" size={22} color="#333" />}
            title="Contact Support"
            onPress={handleContactSupport}
          />

          {/* Logout */}
          <SettingItem
            icon={<Feather name="log-out" size={22} color="#333" />}
            title="Logout"
            onPress={handleLogout}
          />

          {/* Dark Mode Toggle */}
          <SettingItem
            icon={<Feather name="moon" size={22} color="#333" />}
            title="Dark Mode"
            hasToggle={true}
            toggleValue={darkMode}
            onToggleChange={handleDarkModeToggle}
          />
        </View>

        {/* App Info */}
        <View className="mt-8 mb-10">
          <Text className="text-base font-medium text-gray-500 mb-2">
            About
          </Text>

          <SettingItem
            icon={<Feather name="info" size={22} color="#333" />}
            title="App Version"
            onPress={() => console.log("Show app version info")}
          />

          <SettingItem
            icon={<Feather name="file-text" size={22} color="#333" />}
            title="Terms of Service"
            onPress={() => console.log("Navigate to terms of service")}
          />

          <SettingItem
            icon={<Feather name="lock" size={22} color="#333" />}
            title="Privacy Policy"
            onPress={() => console.log("Navigate to privacy policy")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountSettingsScreen;
