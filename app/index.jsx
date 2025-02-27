import { View, ScrollView, StyleSheet, FlatList } from "react-native";
import { useState, useEffect, useMemo } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Accelerometer } from "expo-sensors";

import DicePicker from "@/components/DicePicker";
import DiceList from "@/components/DiceList";
import AddDiceButton from "@/components/AddDiceButton";
import DiceSum from "@/components/DiceSum";
import Dice from "@/components/Dice";

export default function Index() {
  const [dice, setDice] = useState([]);
  const [key, setKey] = useState(0);
  const [rolling, setRolling] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const rollDice = () => {
    setDice(dice => dice.map((die) => {
      let faceValue = Math.random();

      if (die.type === 'd4') {
        faceValue = Math.floor((faceValue * 4)) + 1;
      } else if (die.type === 'd6') {
        faceValue = Math.floor((faceValue * 6)) + 1;
      } else if (die.type === 'd10') {
        faceValue = Math.floor((faceValue * 10)) + 1;
      } else if (die.type === 'd12') {
        faceValue = Math.floor((faceValue * 12)) + 1;
      } else {
        faceValue = Math.floor((faceValue * 20)) + 1;
      }

      return { ...die, faceValue };
    }))

    setRolling(true);
    setTimeout(() => { setRolling(false); }, 1000);
  }

  useEffect(() => {
    let lastRollTime = Date.now();

    const accel = Accelerometer.addListener(({ x, y, z }) => {
      const magnitude = Math.sqrt(x * x + y * y + z * z);
      if (magnitude > 3 && Date.now() - lastRollTime >= 1000) {
        lastRollTime = Date.now();
        rollDice();
      }
    });

    return () => accel.remove();
  }, []);

  const onAddDice = () => {
    setModalVisible(true);
  };

  const onModalClose = () => {
    setModalVisible(false);
  }

  const onPickedDie = (item) => {
    setDice([...dice, { type: item.type, faceValue: 0, key }])
    setKey(key + 1);
    setModalVisible(false);
  }

  const removeDie = (key) => {
    setDice(dice.filter((x) => x.key !== key));
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
            <View style={styles.buttonContainer}>
              <AddDiceButton onAddDice={onAddDice} />
            </View>
            <FlatList
              contentContainerStyle={styles.diceContainer}
              numColumns={3}
              scrollEnabled={false}
              data={dice}
              renderItem={({ item }) =>
                <Dice
                  onPress={() => removeDie(item.key)}
                  key={item.key}
                  type={item.type}
                  rolling={rolling}
                  faceValue={item.faceValue} />}
            />
          </View>
        </ScrollView>
        {sum > 0 && !rolling &&
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
    width: "100%",
    marginTop: 10
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
  },
  buttonContainer: {
    marginBottom: 20
  }
})
