import { UPDATE_USERS, USERS_ERRORS} from '../actions/users';

const initialState = {
    loading: true,
    data: null,
    error: null
}

/* User Reducer */
const usersReducer = (state = initialState, action: any) => {
    switch( action.type ){
        case UPDATE_USERS:
            return {loading: false, data: action.payload, error: null};
        case USERS_ERRORS:
            return {loading: false, data: null, error: action.payload};
    }

    return state;

}

export default usersReducer;