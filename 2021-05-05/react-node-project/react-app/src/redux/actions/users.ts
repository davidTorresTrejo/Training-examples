export const UPDATE_USERS = ` [users] Update User`;
export const USERS_ERRORS = ` [users] Users Error`;
export const GET_USERS = ` [users middleware] Get Users`;


export const updateUsersAction = (users: any) => (
    {
        type: UPDATE_USERS,
        payload: users
    }
);


export const updateErrorAction = (error: any) => (
    {
        type: USERS_ERRORS,
        payload: error
    }
);


export const getUsersAction = (option: string) =>  (
    {
        type: GET_USERS,
        payload: option
    }
);