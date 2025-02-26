import AddDiceButton from "@/components/AddDiceButton";
import DiceSum from "@/components/DiceSum";
import { View, ScrollView, StyleSheet } from "react-native";
import { useState } from "react"

export default function Index() {
  const [sum, setSum] = useState(2);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.diceContainer}>
            <AddDiceButton />
            <AddDiceButton />
            <AddDiceButton />
            <AddDiceButton />
          </View>
        </ScrollView>
        {!!sum &&
          (
            <View style={styles.diceSumContainer}>
              <DiceSum sum={sum} />
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
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 50,
    marginLeft: 0,
    marginRight: 0,
  },
  diceContainer: {
    flexDirection: 'column',
    flex: 1,
    rowGap: 15
  },
  diceSumContainer: {
    marginTop: 35
  }
})
