import React from 'react';
import { View, Text } from 'react-native';
import { Image } from 'expo-image';
import ragImg from '../../../assets/images/rag.png';
import flashcardsImg from '../../../assets/images/flashcards.png';
import quizzesImg from '../../../assets/images/quizzes.png';

const features = [
  {
    title: 'RAG Chat Engine',
    description: 'Query your documents directly with real-time streaming responses and exact page citations.',
    image: ragImg
  },
  {
    title: 'Spaced-Repetition',
    description: 'AI-generated flashcards scheduled using cognitive science algorithms to maximize retention.',
    image: flashcardsImg
  },
  {
    title: 'Dynamic Quizzes',
    description: 'Test your knowledge with auto-generated assessments and immediate grading.',
    image: quizzesImg
  }
];

export function FeatureGrid() {
  return (
    <View className="flex w-full flex-col flex-wrap justify-center gap-8 bg-white px-8 py-[60px] md:flex-row">
      {features.map((f, i) => (
        <View key={i} className="min-w-[320px] overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_10px_20px_rgba(0,0,0,0.1)] elevation-8 md:flex-1">
          <Image source={f.image} className="h-[220px] w-full bg-gray-50" contentFit="cover" />
          <View className="p-6">
            <Text className="mb-3 text-2xl font-extrabold text-gray-900">{f.title}</Text>
            <Text className="text-base leading-6 text-gray-600">{f.description}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}
