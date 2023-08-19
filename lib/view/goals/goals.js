import React, { Fragment } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from '@rneui/base';
import CustomBottomBar from '../navigation_bar/navigation_bar';
import GoalCompletion from './goal_completion';
import GoalItem from './goal_item';

const GoalsPage = ({ navigation }) => {
  const handleBackPress = () => {
    navigation.pop();
  };

  const goals = [
    { iconName: "clock-o", text: "Duration", secondaryText: "02:15", textColor: 'black' },
    { iconName: "book", text: "Theory Goals", secondaryText: "1/4", textColor: 'green' },
    { iconName: "warning", text: "Hazard Goals", secondaryText: "1/4", textColor: 'red' },
    { iconName: "calendar", text: "Days to Test", secondaryText: "33", textColor: 'gold' },
  ];

  const goalItems = [
    { iconName: 'calendar', text: 'Enter real test date', percentage: 100 },
    { iconName: 'question', text: 'Correctly answer all Theory questions', percentage: 27 },
    { iconName: 'map', text: 'Pass 5 Theory Mock Tests at 96% or higher', percentage: 0 },
    { iconName: 'calendar', text: 'Pass 3 Theory Mock Tests within 14 days', percentage: 0 },

    { iconName: 'calendar', text: 'Enter real test date', percentage: 100 },
    { iconName: 'question', text: 'Correctly answer all Theory questions', percentage: 27 },
    { iconName: 'map', text: 'Pass 5 Theory Mock Tests at 96% or higher', percentage: 0 },
  ];

  return (
    <Fragment>
      {/* Allows different color safe areas */}
      <SafeAreaView edges={['top']} style={{ flex: 0, backgroundColor: '#c8ac5c' }} />
      <SafeAreaView edges={['left', 'right', 'bottom']} style={{ flex: 1, backgroundColor: 'white' }} >
        <View style={styles.contentContainer}>

          <View style={styles.topBar}>
            <Icon
              name="arrow-back"
              type="material"
              size={40}
              color={'white'}
              onPress={handleBackPress}
              containerStyle={styles.backIconContainer}
            />
            <View style={styles.titleContainer}>
              <Text style={styles.title}>John's Learner Plan</Text>
              <Text style={styles.progress}>32% Progress</Text>
            </View>
          </View>
          {/* Displays Goals from the list */}
          <View style={styles.goalsContainer}>
            {goals.map((goal, index) => (
              <GoalCompletion
                key={index}
                iconName={goal.iconName}
                text={goal.text}
                secondaryText={goal.secondaryText}
              />
            ))}
          </View>
          <View style={styles.blackRectangle}>
            <Text style={styles.rectangleText}>6 MORE GOALS TO HIT, YOU CAN DO THIS!</Text>
          </View>
          <Text style={styles.boldText}>Theory Test Goals</Text>
          <FlatList
      data={goalItems}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <GoalItem
          key={index}
          iconName={item.iconName}
          text={item.text}
          percentage={item.percentage}
        />
      )}
    />
        </View>
        <CustomBottomBar />
      </SafeAreaView>
    </Fragment>

  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
  },

  topBar: {
    backgroundColor: '#c8ac5c',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingBottom: 30
  },
  backIconContainer: {
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  titleContainer: {
    flexDirection: 'column', // Stack the texts vertically
  },
  progress: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white'
  },
  goalsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  blackRectangle: {
    backgroundColor: 'black',
    alignItems: 'center',
    paddingVertical: 10,
  },
  rectangleText: {
    color: 'white',
  },
  boldText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
});

export default GoalsPage;