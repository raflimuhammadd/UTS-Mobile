import React from 'react';
import { Text, StyleSheet, View, Image } from "react-native";

interface ImageDetailProps {
  imageSource: any;
  artist: string;
  title: string;
  rating: GLfloat;
}

const ImageDetail: React.FC<ImageDetailProps> = ({ imageSource, artist, title, rating }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>Image Score - {rating}</Text>
      <Text style={styles.artist}>Artist - {artist}</Text>
      <Text style={styles.title}>Rating - {rating}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  artist: {
    fontSize: 16,
    color: 'gray',
  },
});


export default ImageDetail;