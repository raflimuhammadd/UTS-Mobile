import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';
import { NavigationProp } from '@react-navigation/native';

interface ImageScreenProps {
  navigation: NavigationProp<any>;
}

const ImageScreen: React.FC<ImageScreenProps> = ({ navigation }) => {
  const imageList = [
    {
      id: '1',
      title: 'Song One',
      artist: 'Artist A',
      imageSource: require('../../assets/maroon5.jpg'),
      rating: 9.5
    },
    {
      id: '2',
      title: 'Song Two',
      artist: 'Artist B',
      imageSource: require('../../assets/maroon5.jpg'),
      rating: 8.0
    },
    {
      id: '3',
      title: 'Song Three',
      artist: 'Artist C',
      imageSource: require('../../assets/maroon5.jpg'),
      rating: 9.5
    },
  ];

  return (
    <View>
      <FlatList
        data={imageList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ImageDetail
            imageSource={item.imageSource}
            artist={item.artist}
            title={item.title}
            rating={item.rating ?? 0}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // Add any styles you want here
});

export default ImageScreen;