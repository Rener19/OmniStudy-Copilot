import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform } from 'react-native';

export function Hero() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Supercharge Your Focus.</Text>
      <Text style={styles.subtitle}>
        OmniStudy transforms your educational PDFs into an interactive learning engine. 
        Read, retain, and review—all in one place.
      </Text>
      <TouchableOpacity style={styles.ctaButton}>
        <Text style={styles.ctaText}>Try Now Without Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 100,
    paddingHorizontal: 24,
    backgroundColor: '#F9FAFB',
    width: '100%',
  },
  title: {
    color: '#111827',
    fontSize: Platform.OS === 'web' ? 64 : 40,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  },
  subtitle: {
    color: '#4B5563',
    fontSize: Platform.OS === 'web' ? 24 : 18,
    textAlign: 'center',
    maxWidth: 700,
    marginBottom: 40,
    lineHeight: 32,
  },
  ctaButton: {
    backgroundColor: '#4F46E5',
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 12,
    shadowColor: '#4F46E5',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },
  ctaText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },
});
