import { View, FlatList } from 'react-native';
import RoundedContainer from '../widgets/rounded_container';
import NavigationService from '../../navigation/navigationService';

const ContainerList = () => {

    navigationService = NavigationService;
    // List of items that are shown. This could be swapped out for a data loading pattern that allows them to be retrieved
    // from an API or local storage for example. But given it's a list of fixed items this is adequate.
    const data = [
        { id: '1', iconType: 'star', text: 'FREE Pass Guarantee', color: 'gold', onPress: () => { navigationService.push({routeName: 'NotImplemented', params: {}}); } },
        { id: '2', iconType: 'book', text: 'Theory Test', color: 'green', onPress: () => { navigationService.push({routeName: 'NotImplemented', params: {}}); } },
        { id: '3', iconType: 'warning', text: 'Hazard Perception', color: 'red', onPress: () => { navigationService.push({routeName: 'NotImplemented', params: {}}); } },
        { id: '4', iconType: 'cog', text: 'Driving Lessons', color: 'blue', onPress: () => { navigationService.push({routeName: 'NotImplemented', params: {}}); } },
        { id: '5', iconType: 'bookmark', text: 'Highway Code', color: 'aqua', onPress: () => { navigationService.push({routeName: 'NotImplemented', params: {}}); } },
        { id: '6', iconType: 'road', text: 'Road Signs', color: 'orange', onPress: () => { navigationService.push({routeName: 'NotImplemented', params: {}}); } },
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