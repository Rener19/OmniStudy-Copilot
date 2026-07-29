import React from 'react';
import { View, Text } from 'react-native';

export function ValueProp() {
  return (
    <View className="w-full items-center border-y border-gray-200 bg-gray-50 px-8 py-20">
      <Text className="mb-6 text-[32px] font-extrabold text-indigo-600">Why Kabisado?</Text>
      <Text className="max-w-[800px] text-center text-lg leading-[30px] text-gray-700">
        Designed for serious students, Kabisado reduces distractions and focuses purely on efficient learning. 
        Whether you&apos;re reviewing lecture notes or mastering complex textbooks, our AI tools are engineered to save you time and boost comprehension. Sync across devices and study anywhere, anytime.
      </Text>
    </View>
  );
}
