import AddDiceButton from "@/components/AddDiceButton";
import DiceSum from "@/components/DiceSum";
import { View, ScrollView, StyleSheet, FlatList } from "react-native";
import Dice from "@/components/Dice";
import { useState } from 'react';

export default function Index() {
  const [dice, setDice] = useState([]);
  const [key, setKey] = useState(0);

  const onAddDice = () => {
    setDice([...dice, { type: "d20", faceValue: 20, key }])
    setKey(key + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <ScrollView
          style={styles.scrollContainer}
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}>
          <View style={styles.diceContainer}>
            <FlatList
              contentContainerStyle={styles.diceContainer}
              numColumns={3}
              scrollEnabled={false}
              data={dice}
              renderItem={({item}) => <Dice type={item.type} faceValue={item.faceValue} />} />
            <AddDiceButton onAddDice={onAddDice} />
          </View>
        </ScrollView>
        {false &&
          (
            <View style={styles.diceSumContainer}>
              <DiceSum sum={0} />
            </View>
          )
        }
      </View>
    </View >
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
    marginTop: 100,
    marginBottom: 50,
    paddingHorizontal: 25,
    width: "100%"
  },
  diceContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    rowGap: 20
  },
  diceSumContainer: {
    marginTop: 35
  }
})
