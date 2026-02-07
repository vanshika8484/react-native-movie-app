import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

const Profile = () => {
  return (
    <ScrollView
      className="flex-1 bg-primary px-5"
      contentContainerStyle={{ paddingBottom: 30 }}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <Text className="text-white text-2xl font-bold mt-16 mb-6 text-center">
        Profile
      </Text>

      {/* Profile Card */}
      <View className="bg-dark-200 rounded-2xl p-5 items-center">
        <Image
          source={{
            uri: "https://i.pravatar.cc/300",
          }}
          className="w-24 h-24 rounded-full mb-4"
        />

        <Text className="text-white text-xl font-bold">
          Vanshika Aggarwal
        </Text>
        <Text className="text-gray-400 text-sm">
          vanshika@email.com
        </Text>

        {/* Edit Button */}
        <TouchableOpacity className="mt-4 bg-accent px-6 py-2 rounded-full">
          <Text className="text-white font-semibold">Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Options */}
      <View className="mt-8 space-y-4">
        <ProfileItem title="My Watchlist" />
        <ProfileItem title="Liked Movies" />
        <ProfileItem title="Settings" />
        <ProfileItem title="Help & Support" />
        <ProfileItem title="Logout" danger />
      </View>
    </ScrollView>
  );
};

export default Profile;

/* Reusable Item */
const ProfileItem = ({ title, danger = false }) => (
  <TouchableOpacity
    className={`flex-row justify-between items-center bg-dark-200 px-5 py-4 rounded-xl`}
  >
    <Text
      className={`text-base ${
        danger ? "text-red-500" : "text-white"
      }`}
    >
      {title}
    </Text>
    <Text className="text-gray-400">{">"}</Text>
  </TouchableOpacity>
);
