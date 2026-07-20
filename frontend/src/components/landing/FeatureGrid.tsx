import React from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import { Image } from 'expo-image';

const features = [
  {
    title: 'RAG Chat Engine',
    description: 'Query your documents directly with real-time streaming responses and exact page citations.',
    image: require('../../../assets/images/rag.png')
  },
  {
    title: 'Spaced-Repetition',
    description: 'AI-generated flashcards scheduled using cognitive science algorithms to maximize retention.',
    image: require('../../../assets/images/flashcards.png')
  },
  {
    title: 'Dynamic Quizzes',
    description: 'Test your knowledge with auto-generated assessments and immediate grading.',
    image: require('../../../assets/images/quizzes.png')
  }
];

export function FeatureGrid() {
  return (
    <View style={styles.container}>
      {features.map((f, i) => (
        <View key={i} style={styles.card}>
          <Image source={f.image} style={styles.image} contentFit="cover" />
          <View style={styles.content}>
            <Text style={styles.title}>{f.title}</Text>
            <Text style={styles.description}>{f.description}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: Platform.OS === 'web' ? 'row' : 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 32,
    paddingHorizontal: 32,
    paddingVertical: 60,
    backgroundColor: '#FFFFFF',
    width: '100%',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    flex: Platform.OS === 'web' ? 1 : undefined,
    minWidth: 320,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 220,
    backgroundColor: '#F9FAFB',
  },
  content: {
    padding: 24,
  },
  title: {
    color: '#111827',
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 12,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  },
  description: {
    color: '#4B5563',
    fontSize: 16,
    lineHeight: 24,
  },
});
