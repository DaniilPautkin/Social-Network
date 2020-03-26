import { authAPI, securityAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_AUTH_USER_DATA = 'auth/SET-AUTH-USER-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'security/GET-CAPTCHA-URL-SUCCESS';

// export type InitialStateType2 = {
//     userId: number | null;
//     isAuth: boolean | null;
//     email: string | null;
//     login: string | null;
//     isFetching: boolean;
//     captchaUrl: string | null;
// };

let initialState = {
    userId: null as number | null,
    isAuth: false,
    email: null as string | null,
    login: null as string | null,
    isFetching: true,
    captchaUrl: null as string | null //if null - captcha is not required
};

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload
            };

        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            };

        default:
            return state
    }
};

type SetAuthUserDataActionPayloadType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
};

type SetAuthUserDataActionType = {
    type: typeof SET_AUTH_USER_DATA;
    payload: SetAuthUserDataActionPayloadType;
};

export const setAuthUserData = (
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean): SetAuthUserDataActionType => ({
        type: SET_AUTH_USER_DATA,
        payload: { userId, email, login, isAuth }
    });

type GetCaptchaUrlActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    payload: { captchaUrl: string }
}

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlActionType => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: { captchaUrl }
});

export const getAuthUserData = () => async (dispatch: any) => {
    let response = await authAPI.me()

    if (response.data.resultCode === 0) {
        //if we ARE authorised we set isAuth = true
        let { id, email, login } = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
};

export const login = (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
) => async (dispatch: any) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) {
            //if server response with resultCode 10 we need to request captchaUrl
            dispatch(getCaptchaUrl())
        }
        let message =
            response.data.messages.length > 0
                ? response.data.messages[0]
                : 'Some error'
        dispatch(stopSubmit('login', { _error: message }));
    }
};

export const logout = () => async (dispatch: any) => {
    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
};

export const getCaptchaUrl = (url: string) => async (dispatch: any) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url

    dispatch(getCaptchaUrlSuccess(captchaUrl))
};

export default authReducer
