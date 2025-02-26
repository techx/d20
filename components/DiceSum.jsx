
import { Text, View, StyleSheet } from 'react-native';

export default function DiceSum({ sum }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {sum}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: "800",
    fontSize: 60
  }
});
