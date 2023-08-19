import { View, FlatList } from 'react-native';
import RoundedContainer from '../widgets/rounded_container';

const ContainerList = ({navigation}) => {

    // List of items that are shown. This could be swapped out for a data loading pattern that allows them to be retrieved
    // from an API or local storage for example. But given it's a list of fixed items this is adequate.
    const data = [
        { id: '1', iconType: 'star', text: 'FREE Pass Guarantee', color: 'gold', onPress: () => { navigation.push('NotImplemented'); } },
        { id: '2', iconType: 'book', text: 'Theory Test', color: 'green', onPress: () => { navigation.push('NotImplemented'); } },
        { id: '3', iconType: 'warning', text: 'Hazard Perception', color: 'red', onPress: () => { navigation.push('NotImplemented'); } },
        { id: '4', iconType: 'cog', text: 'Driving Lessons', color: 'blue', onPress: () => { navigation.push('NotImplemented'); } },
        { id: '5', iconType: 'bookmark', text: 'Highway Code', color: 'aqua', onPress: () => { navigation.push('NotImplemented'); } },
        { id: '6', iconType: 'road', text: 'Road Signs', color: 'orange', onPress: () => { navigation.push('NotImplemented'); } },
    ];

    const renderItem = ({ item }) => (
        <RoundedContainer
            iconType={item.iconType}
            text={item.text}
            color={item.color}
            onPress={item.onPress}
        />
    );

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

export default ContainerList;