export const UPDATE_USERS = ` [users] Update User`;
export const UPDATE_USERS_ERRORS = ` [users] Update Users Error`;

export const updateUsersAction = (users: any) => ({
    type: UPDATE_USERS,
    payload: users
});


export const updateUsersErrorAction = (error: any) => ({
    type: UPDATE_USERS_ERRORS,
    payload: error
});