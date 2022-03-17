import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ImageDetail } from "../components/ImageDetail";

const styles = StyleSheet.create({
    margin:{
        marginLeft: 5,
    }
});

function ImageScreeen() {
  return (
    <View style={styles.margin}>
      <ImageDetail
        title="Forest"
        picSource={require("../../assets/forest.jpg")}
        score="Image score - 1"
      />
      <ImageDetail
        title="Beach"
        picSource={require("../../assets/beach.jpg")}
        score="Image score - 2"
      />
      <ImageDetail
        title="Mountain"
        picSource={require("../../assets/mountain.jpg")}
        score="Image score - 3"
      />
    </View>
  );
}

export default ImageScreeen;
