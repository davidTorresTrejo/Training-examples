import { AUTH_START, AUTH_SUCCESS, AUTH_ERROR, AUTH_LOGOUT } from '../actions/login';

const initialState = {
    authenticating: false,
    token: null,
    user: null,
    error: null,
    isAuthenticated: false
}

// Loign Reducer
const loginReducer = (state = initialState, action: any) => {

    switch(action.type){
        case AUTH_START:
            return { authenticating: true, token: null, user: null, error: null, isAuthenticated: false };
        case AUTH_SUCCESS:
            return { authenticating: false, token: action.token, user: action.payload, error: null, isAuthenticated: true };
        case AUTH_ERROR:
            return { authenticating: false, token: null, user: null, error: action.payload, isAuthenticated: false };
        case AUTH_LOGOUT:
            return { authenticating: false, token: null, user: null, error: null, isAuthenticated: false };
    }
    
    return state;
}

export default loginReducer;