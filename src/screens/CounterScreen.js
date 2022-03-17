import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useState } from "react";

const styles = StyleSheet.create({});

//Personal code. Trying out Immediately invoked functions
let name = "";
if (name === "") {
  name = (function whoIsHe() {
    return "Sam";
  })();
}

export const CounterScreen = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
      <Button title="Decrease" onPress={() => setCount(count - 1)} />
      <Text>Current Count - {count}</Text>
      <Text>He is {name}</Text>
    </View>
  );
};
