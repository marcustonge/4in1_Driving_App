import { View, Text } from 'react-native';
import { Button } from '@rneui/base';
import testInfo from '../../model/testInfo';
import { useDispatch } from 'react-redux';
import { clearAllAnswers } from '../../state/stores/questionReducer';

const TestResultsScreen = ({ route }) => {
    const dispatch = useDispatch();
    const totalScore = route.params.totalScore;
    const passMark = testInfo.passMark;

    const handleGoBack = () => {
        dispatch({ type: 'SET_ACTIVE_TAB', payload: '' });

        // Needs to clear question answer state
        dispatch(clearAllAnswers()); // Reset answer state
        navigationService.pushReplacement({ routeName: "Home", params: {} });
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {totalScore >= passMark ? (<Text style={{fontSize: 32, fontWeight: 'bold'}}>You passed!</Text>) : (<Text style={{fontSize: 32, fontWeight: 'bold'}}>You failed.</Text>)}
            <Text style={{ fontSize: 20, marginBottom: 10 }}>Test Score: {totalScore} / {testInfo.questionCount}</Text>
            <Text style={{ fontSize: 16, marginBottom: 20 }}>Pass Mark: {passMark}</Text>
            <Button
                title="Go back to Main Menu"
                onPress={handleGoBack}
                buttonStyle={{ backgroundColor: 'green', borderRadius: 10 }}
            />
        </View>
    );
};

export default TestResultsScreen;