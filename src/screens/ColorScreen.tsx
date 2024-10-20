import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColocCounter';

const COLOR_INCREMENT = 15;

interface State {
  red: number;
  green: number;
  blue: number;
}

interface Action {
  colorToChange: 'red' | 'green' | 'blue';
  amount: number;
}

const reducer = (state: State, action: Action): State => {
  // state === {red: number, green: number, blue: number};
  // action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 };

  switch (action.colorToChange) {
    case 'red':
      return { ...state, red: state.red + action.amount };
    case 'green':
      return { ...state, green: state.green + action.amount };
    case 'blue':
      return { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const ColorScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })}
        color="Blue"
      />
      <View
        style={{
          marginVertical: 25,
          height: 500,
          width: 500,
          backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22
  }
});

export default ColorScreen;