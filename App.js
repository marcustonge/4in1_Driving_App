import { configureStore } from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import Navigator from './lib/routes/homeStack';
import rootReducer from './lib/state/stores/rootReducer';


const store = configureStore({reducer: rootReducer});


export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}


