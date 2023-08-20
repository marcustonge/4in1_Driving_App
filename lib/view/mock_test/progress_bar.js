import { View, StyleSheet } from 'react-native';
import { LinearProgress } from '@rneui/base';

const ProgressBarComponent = ({ questionNumber, totalQuestions }) => {
    const progress = (questionNumber / totalQuestions) || 0;
    
    return (
            <LinearProgress
                value={progress}
                color="white"
                borderRadius={10}
                height={20}
                style={styles.progressBar}
            />
    );
};

const styles = StyleSheet.create({

    progressBar: {
        alignSelf: 'stretch',
        borderRadius: 10,
        width: '100%',
        height: 8
    },
});

export default ProgressBarComponent;