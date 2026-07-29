import React from 'react';
import { View, Text } from 'react-native';

export function Footer() {
  return (
    <View className="w-full items-center bg-gray-900 py-12">
      <View className="mb-8 flex flex-row flex-wrap justify-center gap-4">
        {/* Placeholder for ASO badges */}
        <View className="rounded-lg border border-gray-700 bg-gray-800 px-6 py-3">
          <Text className="text-base font-semibold text-gray-50">Download on App Store</Text>
        </View>
        <View className="rounded-lg border border-gray-700 bg-gray-800 px-6 py-3">
          <Text className="text-base font-semibold text-gray-50">Get it on Google Play</Text>
        </View>
      </View>
      <Text className="text-sm text-gray-400">© {new Date().getFullYear()} Kabisado Copilot Team. All rights reserved.</Text>
    </View>
  );
}
