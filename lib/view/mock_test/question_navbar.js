import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Icon } from '@rneui/base';

const TestQuestionNavigationBar = ({ onPrevious, onFlag, onFavorite, onNext }) => {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (button) => {
        setActiveButton(button);
        setTimeout(() => {
            setActiveButton(null);
        }, 300); // Reset the button after 300ms
    };

    const isButtonActive = (button) => {
        return activeButton === button;
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.button, isButtonActive('previous') && styles.activeButton]}
                onPress={() => {
                    handleButtonClick('previous');
                    onPrevious();
                }}
            >
                <Icon name="chevron-left" type="font-awesome" color={isButtonActive('previous') ? 'green' : 'grey'} />
                <Text style={[styles.buttonText, isButtonActive('previous') && styles.activeButtonText]}>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, isButtonActive('flag') && styles.activeButton]}
                onPress={() => {
                    handleButtonClick('flag');
                    onFlag();
                }}
            >
                <Icon name="flag" type="font-awesome" color={isButtonActive('flag') ? 'green' : 'grey'} />
                <Text style={[styles.buttonText, isButtonActive('flag') && styles.activeButtonText]}>Flag</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, isButtonActive('favorite') && styles.activeButton]}
                onPress={() => {
                    handleButtonClick('favorite');
                    onFavorite();
                }}
            >
                <Icon name="star" type="font-awesome" color={isButtonActive('favorite') ? 'green' : 'grey'} />
                <Text style={[styles.buttonText, isButtonActive('favorite') && styles.activeButtonText]}>Favourite</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, isButtonActive('next') && styles.activeButton]}
                onPress={() => {
                    handleButtonClick('next');
                    onNext();
                }}
            >
                <Icon name="chevron-right" type="font-awesome" color={isButtonActive('next') ? 'green' : 'grey'} />
                <Text style={[styles.buttonText, isButtonActive('next') && styles.activeButtonText]}>Next</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 10,
        width: '100%',
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderColor: 'grey',
    },
    button: {
        alignItems: 'center',
    },
    buttonText: {
        color: 'grey',
        marginTop: 5,
    },
    activeButton: {
        alignItems: 'center',
    },
    activeButtonText: {
        color: 'green',
        marginTop: 5,
    },
});

export default TestQuestionNavigationBar;