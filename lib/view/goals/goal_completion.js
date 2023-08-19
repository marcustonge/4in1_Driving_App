import { View, Text } from 'react-native';
import { Icon } from '@rneui/base'; // You may need to adjust the import based on your actual library

const GoalCompletion = ({ iconName, text, secondaryText, textColor }) => {
    return (
        <View style={styles.goalItem}>
            <Icon name={iconName} type="font-awesome" size={35} />
            <Text style={{color: textColor}} >{text}</Text>
            <Text style={styles.goalNumber}>{secondaryText}</Text>
        </View>
    );
};

const styles = {
    goalItem: {
        alignItems: 'center',
        backgroundColor: '#f0dcc4',
        width: 100,
        height: 'auto',
        paddingTop: 15,
        paddingBottom: 15
    },
    goalNumber: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5,
    },
};

export default GoalCompletion;