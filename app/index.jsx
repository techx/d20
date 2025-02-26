import AddDiceButton from "@/components/AddDiceButton";
import { View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <AddDiceButton />
      </View>
    </View>
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
  }
})
