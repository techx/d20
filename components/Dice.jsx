import { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import HexagonSvg from "./HexagonSvg";
import TriangleSvg from "./TriangleSvg";
import DiamondSvg from "./DiamondSvg";
import PentagonSvg from "./PentagonSvg";
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming } from "react-native-reanimated";

export default function Dice({ type, faceValue, onPress, rolling = false }) {
  const shake = useSharedValue(0);
  const shuffleNumberTimeout = useRef(null);
  const [animatedNumber, setAnimatedNumber] = useState(1);

  const max = Number.parseInt(type.slice(1));

  const shuffleNumbers = () => {
    if (shuffleNumberTimeout.current) {
      return;
    }

    shuffleNumberTimeout.current = setInterval(
      () => {
        setAnimatedNumber(Math.floor(Math.random() * max) + 1);
      }, 100
    )
  }

  useEffect(() => {
    if (rolling) {
      shake.value = withRepeat(
        withSequence(
          withTiming(-10, { duration: 100 }),
          withTiming(10, { duration: 50 }),
          withTiming(-15, { duration: 50 }),
          withTiming(15, { duration: 100 })
        ),
        -1,
        true
      )
      shuffleNumbers();
    } else {
      shake.value = 0;
      clearInterval(shuffleNumberTimeout.current);
      shuffleNumberTimeout.current = null;
    }
  }, [rolling]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${shake.value}deg` }]
    }
  });

  return (
    <Animated.View style={[animatedStyle, styles.dice]}>
      <Pressable onPress={onPress} style={styles.textContainer}>
        <Text style={styles.text}>{rolling ? animatedNumber : !!faceValue ? (faceValue) : "?"}</Text>
      </Pressable>
      {type === "d20" ? <HexagonSvg width="100%" height="100%" />
        : type === "d6" ? <View style={styles.d6} />
          : type === "d4" ? <TriangleSvg width="100%" height="100%" />
            : type === "d10" ? <DiamondSvg width="100%" height="100%" />
              : type === "d12" ? <PentagonSvg width="100%" height="100%" />
                : false}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  dice: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    transformOrigin: 'center'
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
    width: "80%",
    height: "80%",
    borderRadius: 10,
  }
});
