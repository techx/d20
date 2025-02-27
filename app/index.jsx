import AddDiceButton from "@/components/AddDiceButton";
import DiceSum from "@/components/DiceSum";
import { View, ScrollView, StyleSheet, FlatList } from "react-native";
import Dice from "@/components/Dice";
import { useState, useMemo } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [dice, setDice] = useState([]);
  const [key, setKey] = useState(0);

  const onAddDice = () => {
    setDice([...dice, { type: "d20", faceValue: 20, key }])
    setKey(key + 1);
  };

  const sum = useMemo(() => dice.reduce((previous, current) => previous + current.faceValue, 0), [dice]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <ScrollView
          style={styles.scrollContainer}
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}>
          <View style={styles.diceContainer}>
            <AddDiceButton onAddDice={onAddDice} />
            <FlatList
              contentContainerStyle={styles.diceContainer}
              numColumns={3}
              scrollEnabled={false}
              data={dice}
              renderItem={({ item }) => <Dice type={item.type} faceValue={item.faceValue} />} />
            <Dice type="d6" faceValue={6} />
            <Dice type="d20" faceValue={20} />
            <Dice type="d10" faceValue={10} />
            <Dice type="d4" faceValue={4} />
            <Dice type="d12" faceValue={12} />
          </View>
        </ScrollView>
        {sum > 0 &&
          (
            <View style={styles.diceSumContainer}>
              <DiceSum sum={sum} />
            </View>
          )
        }
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  scrollContainer: {
    width: "100%",
    height: "100%"
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 25,
    width: "100%"
  },
  diceContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    rowGap: 10
  },
  diceSumContainer: {
    marginTop: 35
  }
})
