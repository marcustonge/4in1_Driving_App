import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import screens from './routes';

function Navigator(props) {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false, headerBackground: 'white', cardStyle: {backgroundColor: 'white'}}}
            initialRouteName='Home'
            >
                {Object.entries(screens).map(([screenName, screenComponent]) => (
                    <Stack.Screen
                        key={screenName}
                        name={screenName}
                        component={screenComponent.screen}
                    />
                ))}
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default Navigator;