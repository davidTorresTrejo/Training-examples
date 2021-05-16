export const UPDATE_USERS = ` [users] Update User`;
export const USERS_ERRORS = ` [users] Update Users Error`;
export const GET_USERS = ` [users] Get Users`;


export const updateUsersAction = (users: any) => ({
    type: UPDATE_USERS,
    payload: users
});


export const updateUsersErrorAction = (error: any) => ({
    type: USERS_ERRORS,
    payload: error
});


export const getUsersAction = (option: any) =>  ({
    type: GET_USERS,
    payload: option
});