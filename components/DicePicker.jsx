import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function DicePicker({ isVisible, children, onClose }) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Choose a die</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="#000" size={22} />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: '25%',
    width: '100%',
    backgroundColor: '#dddddd',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 0,
  },
  titleContainer: {
    height: '16%',
    backgroundColor: '#cbcbcb',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#000',
    fontSize: 16,
  },
});
