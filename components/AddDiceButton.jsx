import { Text, View, StyleSheet } from 'react-native';
import FontAwesomeIcons from '@expo/vector-icons/FontAwesome6'

export default function AddDiceButton() {
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.button}>
        <FontAwesomeIcons name="dice-d20" size={28} color="#cccccc" />
        <Text style={styles.text}>
          Add Dice
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 360,
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    borderStyle: "dashed",
    borderColor: "#cccccc",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  text: {
    marginTop: 10,
    color: "#bbbbbb",
    fontWeight: "600"
  }
});
