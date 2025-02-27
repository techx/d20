import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HexagonSvg from "./HexagonSvg";

export default function Dice({ type, faceValue }) {
  return (
    <View style={styles.dice}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{faceValue}</Text>
      </View>
      { type === "d20" ? <HexagonSvg width="100%" height="100%" />
      : type === "d6"  ? <View style={styles.d6} />
      : false}
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
  d6: {
    backgroundColor: "#000",
    width: "90%",
    height: "90%"
  }
});
