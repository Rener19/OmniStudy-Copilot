import { StyleSheet, View, Platform, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { FeatureCard } from '@/components/FeatureCard';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

export default function WelcomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Animated.View 
          entering={FadeInDown.duration(800).springify()} 
          style={styles.heroSection}
        >
          <View style={styles.badgeContainer}>
            <ThemedText style={styles.badgeText}>Capstone Project</ThemedText>
          </View>
          <ThemedText type="title" style={styles.title}>
            OmniStudy Copilot
          </ThemedText>
          <ThemedText style={styles.subtitle}>
            Your AI-powered learning engine. Upload PDFs and transform them into interactive learning experiences.
          </ThemedText>
        </Animated.View>

        <View style={styles.featuresContainer}>
          <FeatureCard 
            title="RAG Chat Engine" 
            description="Real-time streaming responses with exact page-number citations." 
            icon="💬" 
            delay={200} 
          />
          <FeatureCard 
            title="Spaced-Repetition" 
            description="AI-generated flashcards with a swipeable, Tinder-style deck." 
            icon="🗂️" 
            delay={400} 
          />
          <FeatureCard 
            title="Dynamic Quizzes" 
            description="Assessments with real-time grading and knowledge gap summaries." 
            icon="🎯" 
            delay={600} 
          />
        </View>

        <Animated.View entering={FadeInUp.delay(800).duration(600).springify()} style={styles.ctaContainer}>
          <TouchableOpacity style={styles.ctaButton} activeOpacity={0.8}>
            <ThemedText style={styles.ctaText}>Get Started</ThemedText>
          </TouchableOpacity>
        </Animated.View>

      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    paddingBottom: BottomTabInset + Spacing.three,
    paddingTop: Spacing.six,
    maxWidth: MaxContentWidth,
    width: '100%',
  },
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.two,
    marginBottom: Spacing.six,
    marginTop: Spacing.four,
  },
  badgeContainer: {
    backgroundColor: 'rgba(99, 102, 241, 0.15)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: Spacing.three,
  },
  badgeText: {
    color: '#6366f1',
    fontWeight: '600',
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 36,
    lineHeight: 44,
    marginBottom: Spacing.two,
  },
  subtitle: {
    textAlign: 'center',
    opacity: 0.7,
    lineHeight: 24,
    fontSize: 16,
    maxWidth: 400,
  },
  featuresContainer: {
    width: '100%',
    maxWidth: 600,
    alignSelf: 'center',
    flex: 1,
  },
  ctaContainer: {
    width: '100%',
    maxWidth: 600,
    marginTop: 'auto',
  },
  ctaButton: {
    backgroundColor: '#6366f1',
    borderRadius: 100,
    paddingVertical: 18,
    alignItems: 'center',
    shadowColor: '#6366f1',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 8,
  },
  ctaText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
  },
});
