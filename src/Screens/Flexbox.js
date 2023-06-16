import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Flexbox = () => {
  return (
    <View>
      <View style={styles.redbox}>
        <Text></Text>
      </View>
      <View style={styles.purplebox}></View>
      <View style={styles.pinkbox}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
    height: 600,
  },
  redbox: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
  purplebox: {
    width: 100,
    height: 100,
    backgroundColor: "purple",
  },
  pinkbox: {
    width: 100,
    height: 100,
    backgroundColor: "pink",
  },
});
export default Flexbox;
