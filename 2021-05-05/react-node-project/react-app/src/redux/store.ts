import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from './reducers/counter';
import usersReducer from './reducers/users';

/* Combine all reducers */
const combineReducer = combineReducers({
    counterKey: counterReducer,
    users: usersReducer
});

/* Create Central Store */
export const store = createStore(
    combineReducer,
    composeWithDevTools()
);


