import React from 'react';
import { View, FlatList, StyleSheet, ImageBackground, Text } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

interface ImageScreenProps {
  navigation: NavigationProp<any>;
}

const ImageScreen: React.FC<ImageScreenProps> = ({ navigation }) => {
  const imageList = [
    {
      id: '1',
      title: 'APT',
      artist: 'Rose & Mars',
      imageSource: require('../../assets/apt.jpeg'),
      rating: 8.5,
    },
    {
      id: '2',
      title: 'What is Love?',
      artist: 'Twice',
      imageSource: require('../../assets/twice1.jpeg'),
      rating: 9.5,
    },
    {
      id: '3',
      title: 'Skyfall',
      artist: 'Adele',
      imageSource: require('../../assets/Skyfall_cover.png'),
      rating: 9.7,
    },
    {
      id: '4',
      title: 'Look Away',
      artist: 'Chicago',
      imageSource: require('../../assets/chicago.jpg'),
      rating: 9.4,
    },
    {
      id: '5',
      title: 'The Moment',
      artist: 'Kenny G',
      imageSource: require('../../assets/kennyG.jpg'),
      rating: 10,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={imageList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <ImageBackground source={item.imageSource} style={styles.image} imageStyle={styles.imageStyle}>
              <View style={styles.overlay}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.artist}>{item.artist}</Text>
                <Text style={styles.rating}>Rating: {item.rating}</Text>
              </View>
            </ImageBackground>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  card: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
  },
  image: {
    height: 200,
    justifyContent: 'flex-end',
  },
  imageStyle: {
    borderRadius: 10,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  artist: {
    fontSize: 14,
    color: '#ccc',
  },
  rating: {
    fontSize: 12,
    color: '#eee',
    marginTop: 5,
  },
});

export default ImageScreen;
