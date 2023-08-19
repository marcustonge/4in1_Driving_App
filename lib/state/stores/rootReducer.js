import { combineReducers } from 'redux';
import goalsReducer from './goalsReducer'; // Import your reducers
import homeReducer from './homeReducer';
import navigationbarReducer from './navigation_barReducer';
import navigationReducer from '../../navigation/navigationReducer';


const rootReducer = combineReducers({
  home: homeReducer,
  goals: goalsReducer,
  navigationbar: navigationbarReducer,
  navigation: navigationReducer,

});

export default rootReducer;
