import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Head from 'expo-router/head';

import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { FeatureGrid } from '@/components/landing/FeatureGrid';
import { ValueProp } from '@/components/landing/ValueProp';
import { Footer } from '@/components/landing/Footer';

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>Kabisado Copilot - Supercharge Your Focus</title>
        <meta name="description" content="Kabisado transforms your educational PDFs into an interactive learning engine. RAG Chat, Spaced-Repetition, and Dynamic Quizzes." />
        <meta property="og:title" content="Kabisado Copilot" />
        <meta property="og:description" content="Read, retain, and review—all in one place." />
        <meta property="og:type" content="website" />
      </Head>
      <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
        <Header />
        <ScrollView contentContainerStyle={styles.scrollContent} style={styles.scrollView}>
          <Hero />
          <FeatureGrid />
          <ValueProp />
          <Footer />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Bright White
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
  },
});
