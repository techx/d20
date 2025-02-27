import { View, ScrollView, StyleSheet, FlatList } from "react-native";
import { useState, useMemo } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";

import DicePicker from "@/components/DicePicker";
import DiceList from "@/components/DiceList";
import AddDiceButton from "@/components/AddDiceButton";
import DiceSum from "@/components/DiceSum";
import Dice from "@/components/Dice";

export default function Index() {
  const [dice, setDice] = useState([]);
  const [key, setKey] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);

  const onAddDice = () => {
    setModalVisible(true);
  };

  const onModalClose = () => {
    setModalVisible(false);
  }

  const onPickedDie = (item) => {
    setDice([...dice, { type: item.type, faceValue: item.faceValue, key }])
    setKey(key + 1);
    setModalVisible(false);
  }

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
              renderItem={({ item }) => <Dice key={item.key} type={item.type} faceValue={item.faceValue} />} />
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
      <DicePicker isVisible={isModalVisible} onClose={onModalClose}>
        <DiceList onSelect={onPickedDie} onCloseModal={onModalClose} />
      </DicePicker>
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
