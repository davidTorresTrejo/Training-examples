import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import counterReducer from './reducers/counter';
import usersReducer from './reducers/users';
import loginReducer from './reducers/login';


import { usersMdl } from './middleware/users';
import { AUTH_LOGOUT } from './actions/login';

/* Combine all reducers */
const combineReducer = combineReducers({
    counterKey: counterReducer,
    users: usersReducer,
    auth: loginReducer
});

/* Combine All Middlewares */
const combineMiddlewares = [...usersMdl];

/* Code to re-initialize all reducers */
const rootReducer = (state: any, action: any) => {
    if(action.type === AUTH_LOGOUT){
        state = undefined;
    }

    return combineReducer(state, action);
}

/* Create Central Store */
export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...combineMiddlewares))
);




