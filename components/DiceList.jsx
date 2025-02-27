import { StyleSheet, FlatList, Platform, Pressable } from 'react-native';
import Dice from "./Dice";

export default function DiceList({ onSelect, onCloseModal }) {
  const dice = [
    { key: 0, type: "d4", faceValue: 4 },
    { key: 1, type: "d6", faceValue: 6 },
    { key: 2, type: "d10", faceValue: 10 },
    { key: 3, type: "d12", faceValue: 12 },
    { key: 4, type: "d20", faceValue: 20 },
  ];

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web'}
      data={dice}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}>
          <Dice key={item.key} type={item.type} faceValue={item.faceValue} />
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10
  }
});
