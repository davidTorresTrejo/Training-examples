export const AUTH_START = `[login] Auth Start`;
export const AUTH_SUCCESS = `[login] Auth Success`;
export const AUTH_ERROR = `[login] Auth Error`;
export const AUTH_LOGOUT = `[login] Auth Logout`;


export const authStartAction = () => (
    {
        type: AUTH_START
    }
);


export const authSuccessAction = (data: any) => (
    {
        type: AUTH_SUCCESS,
        payload: data[0],
        token: data[1].token
    }
);

export const authErrorAction = (error: any) => (
    {
        type: AUTH_ERROR,
        payload: error
    }
);

export const authLogoutAction = () => (
    {
        type: AUTH_LOGOUT
    }
);