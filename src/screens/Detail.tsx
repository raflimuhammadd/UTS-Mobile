import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';

interface DetailProps {
  navigation: {
    goBack: () => void;
    navigate: (screen: string) => void;
  };
}

const Detail: React.FC<DetailProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ini Halaman Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.text}>Ke Halaman Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    fontSize: 20,
  },
});

export default Detail;