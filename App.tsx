import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import PetScreen from './src/components/PetScreen';
import { createInitialPetState } from './src/domain/pet/createInitialPetState';
import { useState } from 'react';
import { feedPet } from './src/domain/pet/feedPet';

export default function App() {
  const [byte, setByte] = useState(createInitialPetState());

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BYTE</Text>

      <PetScreen message={`${byte.name} is feeling ${byte.mood}. Hunger: ${byte.hunger}.`} />

      <Text style={styles.version}>v0.0.1</Text>
      <StatusBar style="light" />
      <Button
        title="Feed BYTE"
        onPress={() => setByte(feedPet(byte, 20))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#211b2b',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#e8dff5',
    letterSpacing: 6,
    marginBottom: 24,
  },
  version: {
    color: '#9c91aa',
    marginTop: 18,
    fontSize: 12,
  },
});