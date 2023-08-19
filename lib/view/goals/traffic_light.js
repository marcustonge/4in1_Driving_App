import { View, StyleSheet } from 'react-native';

const TrafficLight = ({ percentage }) => {
  const topCircleColor = percentage === 0 ? 'red' : 'grey';
  const middleCircleColor = percentage > 0 && percentage < 100 ? 'yellow' : 'grey';
  const bottomCircleColor = percentage === 100 ? 'green' : 'grey';

  return (
    <View style={styles.trafficLight}>
      <View style={[styles.circle, { backgroundColor: topCircleColor }]} />
      <View style={[styles.circle, { backgroundColor: middleCircleColor }]} />
      <View style={[styles.circle, { backgroundColor: bottomCircleColor }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  trafficLight: {
    width: 30,
    height: 75,
    backgroundColor: 'black',
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 10,
    marginVertical: 5,
  },
});

export default TrafficLight;