import { Middleware, MiddlewareAPI, Dispatch, AnyAction } from 'redux';
import axios from 'axios';
import { GET_USERS, updateUsersAction, updateErrorAction} from '../actions/users';


export const getUsersMiddleware: Middleware = (api: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: any) => {
    
    next(action);

    if(action.type === GET_USERS){
        const URL = action.payload ? `/api/users?name=${action.payload}` : `/api/users`;

        axios.get(URL)
            .then( response => {
                const users: any[] = response.data;
                const modUsers = users.map( (user: any) => {
                    return { User: user.name, Email: user.email, City: user.address.city, Phone: user.phone, Company: user.company.name };
                });
                api.dispatch(updateUsersAction(modUsers));
            })
            .catch(error => api.dispatch(updateErrorAction(error)))
    }
}

export const usersMdl = [getUsersMiddleware];