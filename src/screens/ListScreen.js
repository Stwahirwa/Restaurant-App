import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
    marginLeft: 10,
  },
});

export const ListScreen = () => {
  const Friends = [
    { name: "Friend 1", Age: "Age 30" },
    { name: "Friend 2", Age: "Age 31" },
    { name: "Friend 3", Age: "Age 32" },
    { name: "Friend 4", Age: "Age 33" },
    { name: "Friend 5", Age: "Age 34" },
    { name: "Friend 6", Age: "Age 35" },
  ];
  return (
    <FlatList
      //horizontal={true}. NOTE: this prop brings in horizontal scrolling
      //showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={Friends}
      renderItem={(element) => {
        /**
         *  renderItem call back function takes in an argument of element, which is an object containg a property of the array item and its index.
            element = {item:{name:"Friend 1"}, index:0}. Therefore the element is an object of with a property of each single item in the array,and a property of its index.
            we can as well destructure the item from the element object and render it directly into the Text element e.g renderItem={({item})=>{return <Text>{item}</Text>}}
        */
        return (
          <Text style={styles.textStyle}>
            {element.item.name} - {element.item.Age}
          </Text>
        );
      }}
    />
  );
};
