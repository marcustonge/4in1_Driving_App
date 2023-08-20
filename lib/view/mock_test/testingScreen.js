import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'; // Import Image for the book icon
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import OptionButton from './option_button';
import { Button, Icon } from '@rneui/base';
import { clearAllAnswers, setCurrentQuestionIndex, setUserAnswer } from '../../state/stores/questionReducer';
import drivingTheoryQuestions from '../../model/questions';
import Timer from './timer';
import TestQuestionNavigationBar from './question_navbar';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProgressBarComponent from './progress_bar';

const TestingScreen = () => {
    const dispatch = useDispatch();
    const route = useRoute();

    const { currentQuestionIndex, userAnswers } = useSelector(state => state.theorytestQuestions);

    const handleBackPress = () => {
        dispatch({ type: 'SET_ACTIVE_TAB', payload: '' });

        // Needs to clear question answer state
        dispatch(clearAllAnswers()); // Reset answer state

        navigationService.pushReplacement({ routeName: 'MockTestHomePage' });
    };

    const handleSubmitTest = () => {
        // Calculate the test results
        let totalScore = 0;

        questions.forEach((question, index) => {
            if (userAnswers[index] === null) {
                totalScore += 0;
            } else if (userAnswers[index] === question.answer) {
                totalScore += 1;
            }
        });

        // Navigate to TestResultsScreen with calculated results to show to user
        navigationService.pushReplacement({ routeName: 'TestResults', params: {totalScore: totalScore}});
    };


    const duration = route.params.duration;



    const questions = drivingTheoryQuestions;

    useEffect(() => {
        // Sets initial question index when the screen loads
        dispatch(setCurrentQuestionIndex(0));
    }, []);

    const handleAnswerSelect = (optionIndex) => {
        const isSelected = userAnswers[currentQuestionIndex] === optionIndex;

        if (isSelected) {
            dispatch(setUserAnswer(currentQuestionIndex, undefined)); // Deselect the option
        } else {
            dispatch(setUserAnswer(currentQuestionIndex, optionIndex)); // Select the new option
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            dispatch(setCurrentQuestionIndex(currentQuestionIndex - 1));
        }
    };

    const handleNext = () => {
        if (currentQuestionIndex <= questions.length - 1) {
            dispatch(setCurrentQuestionIndex(currentQuestionIndex + 1));
        }
    };

    return (
        <>
            <SafeAreaView edges={['top']} style={{ flex: 0, backgroundColor: 'green' }} />
            <SafeAreaView edges={['left', 'right', 'bottom']} style={{ flex: 1, backgroundColor: 'white' }} >
                <View style={styles.contentContainer}>
                    {currentQuestionIndex < questions.length ? (
                        <>
                            <View style={styles.topBar}>
                                <View style={{ flexDirection: 'row', width: '100%', alignItems: 'flex-start' }}>
                                    <View style={{ flexDirection: 'row', position: 'absolute', justifyContent: 'center', width: '100%' }}>
                                        <Timer duration={duration} onTimeUp={handleSubmitTest} />
                                    </View>
                                    <Icon
                                        name="arrow-back"
                                        type="material"
                                        size={40}
                                        color={'white'}
                                        onPress={handleBackPress}
                                    />
                                </View>
                                <View style={{ flex: 0, flexDirection: 'column', alignContent: 'flex-start', width: '100%', paddingLeft: 10, paddingTop: 10 }}>
                                    <View style={styles.titleContainer}>
                                        <Text style={styles.title}>Question {currentQuestionIndex + 1}/{drivingTheoryQuestions.length}</Text>
                                        <ProgressBarComponent questionNumber={currentQuestionIndex + 1} totalQuestions={drivingTheoryQuestions.length} />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.container}>
                                <Text style={[styles.questionTextBold, { paddingTop: 40, width: '80%' }]}>{questions[currentQuestionIndex].question}</Text>
                                <View style={{ flex: 1 }}>

                                    <Icon name="book" type="font-awesome" size={180} style={{ paddingBottom: 20 }} />
                                    <Text style={{ color: 'grey', fontSize: 16, }}>Please select one answer</Text>
                                    {questions[currentQuestionIndex].options.map((option, optionIndex) => (
                                        <OptionButton
                                            key={optionIndex}
                                            option={option}
                                            isSelected={userAnswers[currentQuestionIndex] === option.value}
                                            onPress={() => handleAnswerSelect(option.value)}
                                        />
                                    ))}
                                </View>




                                <TestQuestionNavigationBar onPrevious={handlePrevious} onNext={handleNext} onFlag={() => { }} onFavorite={() => { }} />
                            </View>
                        </>
                    ) : (
                        <>

                            <View style={styles.topBar}>
                                <View style={{ flexDirection: 'row', width: '100%', alignItems: 'flex-start' }}>
                                    <View style={{ flexDirection: 'row', position: 'absolute', justifyContent: 'center', width: '100%' }}>
                                        <Timer duration={duration} onTimeUp={handleSubmitTest} />
                                    </View>
                                    <Icon
                                        name="arrow-back"
                                        type="material"
                                        size={40}
                                        color={'white'}
                                        onPress={handleBackPress}
                                    />
                                </View>
                                <View style={{ flex: 0, flexDirection: 'column', alignContent: 'flex-start', width: '100%', paddingLeft: 10, paddingTop: 10 }}>
                                    <View style={styles.titleContainer}>
                                        <Text style={{
                                            textAlign: 'center', fontSize: 28,
                                            fontWeight: 'bold',
                                            color: 'white',
                                        }}>Submit</Text>
                                        {/* <ProgressBarComponent questionNumber={5} totalQuestions={5} /> */}
                                    </View>
                                </View>
                            </View>
                            <View style={styles.container}>
                                <Text style={[styles.questionTextBold, { paddingTop: 40, width: '80%', textAlign: 'center' }]}>Finished?</Text>
                                <View style={{ flex: 1, justifyContent: 'space-between', width: '70%' }}>

                                    <Icon name="book" type="font-awesome" size={180} style={{ paddingBottom: 20 }} />
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Your current answers will be submitted.</Text>
                                    <Button
                                        title="Submit Test"
                                        onPress={handleSubmitTest}
                                        buttonStyle={{ backgroundColor: 'green', fontSize: 24, paddingTop: 10, paddingBottom: 10 }}
                                        titleStyle={{ color: 'white' }}
                                    />
                                    <View style={{ paddingBottom: 50 }} />

                                </View>

                                <TestQuestionNavigationBar onPrevious={handlePrevious} onNext={handleNext} onFlag={() => { }} onFavorite={() => { }} />
                            </View>

                        </>
                    )}
                </View>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'center',
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    topBar: {
        backgroundColor: 'green',
        padding: 10,
        paddingBottom: 30
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        paddingBottom: 20
    },
    progress: {
        fontWeight: 'bold',
        fontSize: 24,
        color: 'white'
    },
    timerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    questionTextBold: {
        fontSize: 20,
        fontWeight: 'bold', // Make the question text bold
        marginBottom: 10,
    },
    bookIcon: {
        width: 200,
        height: 200,
        marginBottom: 5,
    },
    submitButton: {
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
    },
    submitButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default TestingScreen;