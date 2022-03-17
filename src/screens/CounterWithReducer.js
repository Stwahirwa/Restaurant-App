import React, { useReducer } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

let digit = 1;

export const CounterWithReducer = () => {
  const [state, dispatch] = useReducer(reducerFunc, {
    num: 0,
  });

  function reducerFunc(state, action) {
    switch (action.type) {
      case "increase":
        return { ...state, num: state.num + action.payload };
      case "decrease":
        return { ...state, num: state.num - action.payload };
      case "reset":
        return { ...state, num: action.payload };
      default:
        return state;
    }
  }

  return (
    <View>
      <Text>CounterWithReducer</Text>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: "increase", payload: digit })}
      />

      <Button
        title="Decrease"
        onPress={() => dispatch({ type: "decrease", payload: digit })}
      />
      <Button
        title="Reset"
        onPress={() => dispatch({ type: "reset", payload: 0 })}
      />

      <Text style={styles.text}>Counter: {state.num}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginLeft: 50,
    fontSize: 40,
  },
});
