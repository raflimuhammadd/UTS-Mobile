import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

// Define interface for proops
interface SplashScreenProps {
  navigation: NavigationProp<any>;
}


const SplashScreen: React.FC<SplashScreenProps> = ({ navigation}) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimating(false);
      navigation.navigate('Home');
    }, 5000)
    // clear timer on component
    // return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Splash Screen</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    fontSize: 20,
  },
});

export default SplashScreen;