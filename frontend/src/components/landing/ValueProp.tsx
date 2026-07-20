import React from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';

export function ValueProp() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Why OmniStudy?</Text>
      <Text style={styles.text}>
        Designed for serious students, OmniStudy reduces distractions and focuses purely on efficient learning. 
        Whether you're reviewing lecture notes or mastering complex textbooks, our AI tools are engineered to save you time and boost comprehension. Sync across devices and study anywhere, anytime.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 80,
    paddingHorizontal: 32,
    backgroundColor: '#F9FAFB',
    width: '100%',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E5E7EB',
  },
  heading: {
    color: '#4F46E5',
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 24,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  },
  text: {
    color: '#374151',
    fontSize: 18,
    lineHeight: 30,
    textAlign: 'center',
    maxWidth: 800,
  }
});
