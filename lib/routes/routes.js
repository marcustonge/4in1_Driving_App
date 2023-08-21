import HomeScreen from '../view/home/home';
import GoalsScreen from '../view/goals/goals';
import NotImplementedScreen from '../view/notimplemented/notimplemented';
import MockTestHomePage from '../view/mock_test/mock_test_home';
import TestingScreen from '../view/mock_test/testingScreen';
import TestResultsScreen from '../view/mock_test/test_results';
import AuthScreen from '../view/auth/AuthScreen';
import ChatsScreen from '../view/chat/chats';
import AddChatScreen from '../view/chat/add_chat';
import ChatScreen from '../view/chat/ChatScreen';

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
    },

    AuthScreen: {
        screen: AuthScreen
    },

    Chats: {
        screen: ChatsScreen 
    },

    AddChat: {
        screen: AddChatScreen
    },

    Chat: {
        screen: ChatScreen
    }

};

export default PageRoutes;