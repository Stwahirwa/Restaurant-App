import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({});

export const ImageDetail = (props) => {
  console.log(props);
  return (
    <View>
      <Text>{props.score}</Text>
      <Image source={props.picSource} />
      <Text>{props.title}</Text>
    </View>
  );
};
