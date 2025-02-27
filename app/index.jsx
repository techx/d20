import AddDiceButton from "@/components/AddDiceButton";
import DiceSum from "@/components/DiceSum";
import { View, ScrollView, StyleSheet } from "react-native";
import Dice from "@/components/Dice";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <ScrollView style={{ width: "100%", height: "100%" }} alwaysBounceVertical={false} showsVerticalScrollIndicator={false}>
          <View style={styles.diceContainer}>
            <AddDiceButton />
            <Dice />
          </View>
        </ScrollView>
        {true &&
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
    flex: 1,
    rowGap: 15
  },
  diceSumContainer: {
    marginTop: 35
  }
})
