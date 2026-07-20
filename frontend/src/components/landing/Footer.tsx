import React from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';

export function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.badgeContainer}>
        {/* Placeholder for ASO badges */}
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Download on App Store</Text>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Get it on Google Play</Text>
        </View>
      </View>
      <Text style={styles.copyright}>© {new Date().getFullYear()} OmniStudy Copilot Team. All rights reserved.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 48,
    backgroundColor: '#111827', 
    width: '100%',
  },
  badgeContainer: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 32,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  badge: {
    backgroundColor: '#1F2937',
    borderWidth: 1,
    borderColor: '#374151',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  badgeText: {
    color: '#F9FAFB',
    fontSize: 16,
    fontWeight: '600',
  },
  copyright: {
    color: '#9CA3AF',
    fontSize: 14,
  }
});
