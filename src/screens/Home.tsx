import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

interface HomeProps {
  navigation: {
    navigate: (screen: string) => void;
  };
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Home Screen</Text>
        <Text style={styles.headerSubtitle}>Welcome! Choose an action below:</Text>
      </View>

      <TouchableOpacity
        style={styles.cardButton}
        onPress={() => navigation.navigate('Detail')}
      >
        <Text style={styles.cardButtonText}>Go to Detail Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cardButton}
        onPress={() => navigation.navigate('ImageScreen')}
      >
        <Text style={styles.cardButtonText}>Go to List Image</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cardButton}
        onPress={() => navigation.navigate('PlayerScreen')}
      >
        <Text style={styles.cardButtonText}>Go to Player Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cardButton}
        onPress={() => navigation.navigate('ColorScreen')}
      >
        <Text style={styles.cardButtonText}>Go to Color Demo Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  header: {
    marginBottom: 24,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  cardButton: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
  },
  cardButtonText: {
    fontSize: 18,
    color: '#333',
    fontWeight: '600',
  },
});

export default Home;
