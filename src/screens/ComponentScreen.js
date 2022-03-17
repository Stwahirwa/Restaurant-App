import React from "react";
import { Text, StyleSheet, View } from "react-native";

function ComponentScreen() {
  const name = "Twahirwa";
  return (
    <View>
      <Text style={styles.textStyle}>This is the Components Screen</Text>
      <Text>Hi {name}!</Text>
      <Text style={styles.subHeaderStyle}>We are glad to have you here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
  },
  subHeaderStyle: {
    fontSize: 15,
    color: "blue",
  },
});

export default ComponentScreen;
