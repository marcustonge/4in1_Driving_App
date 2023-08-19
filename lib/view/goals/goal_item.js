import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import TrafficLight from './traffic_light';

const GoalItem = ({ iconName, text, percentage }) => {
  return (
    <View style={{ padding: 2 }}>

      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <FontAwesome name={iconName} size={40} color="white" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{text}</Text>
        </View>
        <View style={styles.percentageContainer}>
          <View style={styles.percentageContent}>
            <Text style={styles.percentageText}>{percentage}%</Text>
            <TrafficLight percentage={percentage} />
          </View>
        </View>

        <View style={{paddingLeft: 10}}>
        <View style={[styles.triangle]}/>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    backgroundColor: 'green',
    width: '100%',
    padding: 10,
  },
  iconContainer: {
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
    paddingRight: 25
  },
  text: {
    color: 'white',
    fontSize: 20
  },
  percentageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  percentageContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 80,
  },
  percentageText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'right'
    // marginRight: 5
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: 10,
    borderBottomWidth: 16,
    borderLeftWidth: 10,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'white',
    borderLeftColor: 'transparent',
  },
});

export default GoalItem;