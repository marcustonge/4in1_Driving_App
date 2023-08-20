import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const OptionButton = ({ option, isSelected, onPress, isDisabled }) => {
  return (
    <TouchableOpacity
      style={[
        styles.optionButton,
        isSelected ? styles.selectedOption : null, // Apply selected style conditionally
      ]}
      onPress={onPress}
      disabled={isDisabled}
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
        padding: 10,
        marginBottom: 10,
    },

    selectedOption: {
        backgroundColor: 'green',
        color: 'white',
    },

});

export default OptionButton;