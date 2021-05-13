import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from './reducers/counter';

/* Combine all reducers */
const combineReducer = combineReducers({
    counterKey: counterReducer
});

/* Create Central Store */
export const store = createStore(
    combineReducer,
    composeWithDevTools()
);


