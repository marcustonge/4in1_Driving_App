import HomeScreen from '../view/home/home';
import GoalsScreen from '../view/goals/goals';
import NotImplementedScreen from '../view/notimplemented/notimplemented';
import MockTestHomePage from '../view/mock_test/mock_test_home';
import TestingScreen from '../view/mock_test/testingScreen';
import TestResultsScreen from '../view/mock_test/test_results';

const PageRoutes = {
    Home: {
        screen: HomeScreen
    },
    Goals: {
        screen: GoalsScreen
    },
    NotImplemented: {
        screen: NotImplementedScreen
    },
    MockTestHomePage:{
        screen: MockTestHomePage
    },

    Testing: {
        screen: TestingScreen
    },

    TestResults: {
        screen: TestResultsScreen
    }

};

export default PageRoutes;