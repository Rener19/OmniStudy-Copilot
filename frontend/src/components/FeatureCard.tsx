import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  delay?: number;
}

export function FeatureCard({ title, description, icon, delay = 0 }: FeatureCardProps) {
  return (
    <Animated.View entering={FadeInUp.delay(delay).duration(600).springify()}>
      <ThemedView type="backgroundElement" style={styles.card}>
        <View style={styles.iconContainer}>
          <ThemedText type="title" style={styles.icon}>{icon}</ThemedText>
        </View>
        <ThemedText type="subtitle" style={styles.title}>{title}</ThemedText>
        <ThemedText style={styles.description}>{description}</ThemedText>
      </ThemedView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 24,
    borderRadius: 20,
    marginBottom: 16,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(99, 102, 241, 0.1)', // indigo tint
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    fontSize: 24,
    lineHeight: 32,
  },
  title: {
    marginBottom: 8,
    fontWeight: '700',
    color: '#6366f1', // indigo
  },
  description: {
    opacity: 0.8,
    lineHeight: 22,
  },
});
