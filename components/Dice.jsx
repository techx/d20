import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HexagonSvg from "./HexagonSvg";

export default function Dice() {
  return (
    <View style={styles.dice}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>20</Text>
      </View>
      <HexagonSvg width="100%" height="100%" />
    </View>
  );
};

const styles = StyleSheet.create({
  dice: {
    width: 100,
    height: 100,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
  },
});
