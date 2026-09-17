import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>BYTE</Text>

      <View style={styles.petScreen}>
        <Text style={styles.pet}>◖•ᴗ•◗</Text>
        <Text style={styles.message}>BYTE wants a snack.</Text>
      </View>

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

  petScreen: {
    width: '100%',
    maxWidth: 350,
    height: 300,
    backgroundColor: '#d8d8b8',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  pet: {
    fontSize: 54,
    color: '#29291f',
  },

  message: {
    fontSize: 16,
    color: '#29291f',
    marginTop: 24,
  },

  version: {
    color: '#9c91aa',
    marginTop: 18,
    fontSize: 12,
  },
});