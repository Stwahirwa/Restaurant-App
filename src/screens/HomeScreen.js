import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  console.log(props.navigation);
  const { navigation } = props; //prop object destructuring
  return (
    <View>
      <Text style={styles.text}>Hi There!</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => {
          props.navigation.navigate("Components");
        }}
      />
      <Button
        title="Go to List Demo"
        onPress={() => {
          navigation.navigate("List");
        }}
      />
      <Button
        title="Go to Image Screen"
        onPress={() => {
          navigation.navigate("Images");
        }}
      />
      <Button
        title="Go to counter Demo"
        onPress={() => {
          navigation.navigate("Counter");
        }}
      />
      <Button
        title="Go to Color Demo"
        onPress={() => {
          navigation.navigate("Color");
        }}
      />
      <Button
        title="Go to Sqaure Demo"
        onPress={() => {
          navigation.navigate("Square");
        }}
      />
      <Button
        title="Go to CounterHk Demo"
        onPress={() => {
          navigation.navigate("ReducerHkCounter");
        }}
      />
      <Button
        title="Go to TestScreen Demo"
        onPress={() => {
          navigation.navigate("TextS");
        }}
      />
       <Button
        title="Go to Box Demo"
        onPress={() => {
          navigation.navigate("Box");
        }}
      />
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("List");
        }}
      >
        <Text>TouchableOpacity list1</Text>
        <Text>TouchableOpacity list2</Text>
        <Text>TouchableOpacity list3</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
