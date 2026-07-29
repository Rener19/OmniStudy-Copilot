import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export function Header() {
  return (
    <View className="w-full flex-row items-center justify-between border-b border-gray-200 bg-white px-8 py-5">
      <View>
        <Text className="text-3xl font-extrabold text-indigo-600">Kabisado</Text>
      </View>
      <View className="flex-row items-center gap-4">
        <TouchableOpacity className="px-5 py-2.5">
          <Text className="text-base font-semibold text-gray-700">Login</Text>
        </TouchableOpacity>
        <TouchableOpacity className="rounded-lg bg-indigo-600 px-5 py-2.5">
          <Text className="text-base font-semibold text-white">Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
