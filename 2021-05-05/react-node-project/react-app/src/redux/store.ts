import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from './reducers/counter';
import usersReducer from './reducers/users';
import { usersMdl } from './middleware/users';

/* Combine all reducers */
const combineReducer = combineReducers({
    counterKey: counterReducer,
    users: usersReducer
});


/* Combine All Middlewares */
const combineMiddlewares = [...usersMdl];

/* Create Central Store */
export const store = createStore(
    combineReducer,
    composeWithDevTools(applyMiddleware(...combineMiddlewares))
);




