import { StyleSheet, Text, View } from 'react-native';

type PetScreenProps = {
  message: string;
};

export default function PetScreen({ message }: PetScreenProps) {
  return (
    <View style={styles.screen}>
      <Text style={styles.pet}>◖•ᴗ•◗</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
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
});