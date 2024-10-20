import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

interface ColorCounterProps {
  color: string;
  onIncrease: () => void;
  onDecrease: () => void;
}

const ColorCounter: React.FC<ColorCounterProps> = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
      <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22
  }
});

export default ColorCounter;