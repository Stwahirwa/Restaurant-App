import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

function BoxScreen() {
  return (
    <View style={styles.parentStyle}>
      <Text style={styles.viewOneStyle}>Child #1</Text>
      <Text style={styles.viewTwoStyle}>Child #2</Text>
      <Text style={styles.viewThreeStyle}>Child #3</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewOneStyle: {
    height: 50,
    width: 50,
    backgroundColor: "red",
  },
  viewTwoStyle: {
    height: 50,
    width: 50,
    backgroundColor: "green",
    marginTop: 50
  },
  viewThreeStyle: {
    height: 50,
    width: 50,
    backgroundColor: "purple",
  },
});

export default BoxScreen;
