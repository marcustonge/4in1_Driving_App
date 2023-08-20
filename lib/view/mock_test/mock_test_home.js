import React, { Fragment } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from '@rneui/base';
import NavigationService from '../../navigation/navigationService';

import CircleTextIcon from './circle_text_icon';
const MockTestHomePage = () => {
    const navigationService = NavigationService;

    const handleBackPress = () => {
        navigationService.pushReplacement({ routeName: 'Home' })
    };

    // Test info, this can be modified to be pulled from state in the future to allow for more tests to be undertaken
    const testInfo = {duration: 0.5, questionCount: 5, passMark: 3 };

    const iconsData = [
        { iconName: 'book', backgroundColor: 'green', text: `${testInfo.duration} mins` },
        { iconName: 'book', backgroundColor: 'lightgreen', text: `${testInfo.passMark}/${testInfo.questionCount} to pass` },
        { iconName: 'book', backgroundColor: 'orange', text: `${testInfo.questionCount} questions` },
    ];

    return (
        <Fragment>
            {/* Allows different color safe areas */}
            <SafeAreaView edges={['top']} style={{ flex: 0, backgroundColor: 'green' }} />
            <SafeAreaView edges={['left', 'right', 'bottom']} style={{ flex: 1, backgroundColor: 'white' }} >
                <View>

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
                            <Text style={styles.title}>Mock Test</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.container}>

                    <View style={styles.row}>
                        {iconsData.map((icon, index) => (
                            <View key= {index} style={{ paddingLeft: 10, paddingRight: 10, }}>
                                <CircleTextIcon
                                    
                                    iconName={icon.iconName}
                                    backgroundColor={icon.backgroundColor}
                                    text={icon.text}
                                /></View>
                        ))}
                    </View>

                    <Text style={styles.introText}>
                        You will have {testInfo.duration} minutes to answer {testInfo.questionCount} multiple choice questions.
                        You need to correctly answer {testInfo.passMark} or more in order to achieve a pass.
                    </Text>
                    <View style={styles.optionContainer}>
                        <TouchableOpacity style={styles.optionButton}>
                            <Text style={styles.optionText}>Car Driver in GB</Text>
                            <View style={styles.changeButton}>
                                <Text style={styles.changeButtonText}>Change</Text>
                                <Icon name="arrow-right" type="font-awesome" color="black" />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.horizontalLine} />
                        <TouchableOpacity style={styles.optionButton}>
                            <Text style={styles.optionText}>Questions not yet seen</Text>
                            <View style={styles.changeButton}>
                                <Text style={styles.changeButtonText}>Change</Text>
                                <Icon name="arrow-right" type="font-awesome" color="black" />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.startButton} onPress= {() => navigationService.navigate({routeName: 'Testing', params: {duration: testInfo.duration}})}>
                        <Text style={styles.startButtonText}>Start Test</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </Fragment>

    );
};

const styles = StyleSheet.create({
    topBar: {
        backgroundColor: 'green',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        paddingBottom: 30
    },
    backIconContainer: {
        marginRight: 10,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        // textAlign: 'center',
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




    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    row: {
        paddingTop: 30,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    circle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconText: {
        color: 'white',
        marginTop: 5,
        textAlign: 'center',
    },
    introText: {
        flex: 1,
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    optionContainer: {
        width: '100%',
        paddingBottom: 50,
        // marginBottom: 20,
    },
    optionButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
    optionText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    changeButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    changeButtonText: {
        marginRight: 5,
    },
    horizontalLine: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginVertical: 10,
    },
    startButton: {
        backgroundColor: 'green',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        width: '70%',
    },
    startButtonText: {
        padding: 5,
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default MockTestHomePage;