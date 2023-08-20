import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PageRoutes from './routes';
import NavigationService from '../navigation/navigationService';

function Navigator(props) {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer ref={NavigationService.setNavigator} >
            <Stack.Navigator screenOptions={{headerShown: false, headerBackground: 'white', cardStyle: {backgroundColor: 'white'}}}
            initialRouteName='Home'
            >
                {Object.entries(PageRoutes).map(([screenName, screenComponent]) => (
                    <Stack.Screen
                        key={screenName}
                        name={screenName}
                        component={screenComponent.screen}
                        options={{
                            animationTypeForReplace: 'pop',
                        }}
                    />
                ))}
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default Navigator;