import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const OptionButton = ({ option, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.optionButton,
        isSelected ? styles.selectedOption : null, // Apply selected style conditionally
      ]}
      onPress={onPress}
    >
      <Text style={isSelected && styles.selectedOption}>{option.text}</Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
    optionButton: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 18,
        marginBottom: 10,
        width: 350
    },

    selectedOption: {
        backgroundColor: 'green',
        color: 'white',
    },

});

export default OptionButton;