import { combineReducers } from 'redux';
import goalsReducer from './goalsReducer'; // Import your reducers
import homeReducer from './homeReducer';
import navigationbarReducer from './navigation_barReducer';
import navigationReducer from '../../navigation/navigationReducer';
import theorytestReducer from './theorytestReducer';
import questionReducer from './questionReducer';


const rootReducer = combineReducers({
  home: homeReducer,
  goals: goalsReducer,
  navigationbar: navigationbarReducer,
  navigation: navigationReducer,
  theorytest: theorytestReducer,
  theorytestQuestions: questionReducer,

});

export default rootReducer;
