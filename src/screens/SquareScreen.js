import React, { useReducer } from "react";
import { View, StyleSheet, Text } from "react-native";
import ColorCounter from "../components/ColorCounter";

const styles = StyleSheet.create({});

const COLOR_INCREMENT = 15;

function reducerFunc(state, action) {
  //state = {red: number, green: number, blue: number}
  //action = {colorToChange: 'red' || 'green' || 'blue, amount: 15 || -15}

  switch (action.colorToChange) {
    case "red":
      //never modify the state directly e.g state.red = state-red -15;
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount };
    case "green":
      return state.green + action.amount > 255 ||
        state.green + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount };
    case "blue":
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
}

function SquareScreen() {
  const [state, dispatch] = useReducer(reducerFunc, {
    red: 0,
    green: 0,
    blue: 0,
  });
  console.log(state);
  // A better way to look at the dispatch method is runMyreducerFunc i.e. reducerFunc(state, action = argument/object passed in dispatch method)

  const { red, green, blue } = state;
  console.log(red, green, blue);

  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "red", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "red", amount: -1 * COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        color="Blue"
        onIncrease={() =>
          dispatch({ colorToChange: "blue", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "blue", amount: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Green"
        onIncrease={() =>
          dispatch({ colorToChange: "green", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "green", amount: -1 * COLOR_INCREMENT })
        }
      />

      <View
        style={{
          height: 150,
          width: 180,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
}

export default SquareScreen;
