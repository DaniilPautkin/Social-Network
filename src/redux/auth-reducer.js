import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from 'redux-form'

const SET_AUTH_USER_DATA = "auth/SET-AUTH-USER-DATA";
const GET_CAPTCHA_URL_SUCCESS = "security/GET-CAPTCHA-URL-SUCCESS";


let initialState = {
    userId: null,
    isAuth: false,
    email: null,
    login: null,
    isFetching: true,
    captchaUrl: null    //if null - captcha is not required
}

const authReducer = (state = initialState, action) => {


    switch (action.type) {

        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload
            }

        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;

    }

}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_AUTH_USER_DATA, payload: { userId, email, login, isAuth } });

export const getCaptchaUrlSuccess = (captchaUrl) => ({ type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl } })

export const getAuthUserData = () => async (dispatch) => {

    let response = await authAPI.me()

    if (response.data.resultCode === 0) {//if we ARE authorised we set isAuth = true
        let { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {

    let response = await authAPI.login(email, password, rememberMe, captcha)

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) { //if server response with resultCode 10 we need to request captchaUrl
            dispatch(getCaptchaUrl())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', { _error: message }))
    }
}

export const logout = () => async (dispatch) => {

    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export const getCaptchaUrl = (url) => async (dispatch) => {

    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url

    dispatch(getCaptchaUrlSuccess(captchaUrl))

}

export default authReducer