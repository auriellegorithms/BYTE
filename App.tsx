import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PetScreen from './src/components/PetScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BYTE</Text>

      <PetScreen message="BYTE wants a snack." />

      <Text style={styles.version}>v0.0.1</Text>
      <StatusBar style="light" />
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