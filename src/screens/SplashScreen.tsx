import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

// Define interface for props
interface SplashScreenProps {
  navigation: NavigationProp<any>;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home');
    }, 5000);

    return () => clearTimeout(timer); // Clear timer on component unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/pixel.svg')} // Replace with your logo path
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.text}>Welcome to MyApp</Text>
      <ActivityIndicator size="large" color="#CBD2A4" style={styles.loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF', // Replace with your desired background color
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    color: '#CBD2A4',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  loading: {
    marginTop: 20,
  },
});

export default SplashScreen;