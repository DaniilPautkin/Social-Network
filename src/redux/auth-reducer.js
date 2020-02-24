import { authAPI } from "../api/api";
import { stopSubmit } from 'redux-form'

const SET_AUTH_USER_DATA = "SET-AUTH-USER-DATA";

let initialState = {
    userId: null,
    isAuth: false,
    email: null,
    login: null,
    isFetching: true
}

const authReducer = (state = initialState, action) => {


    switch (action.type) {

        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;

    }

}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_AUTH_USER_DATA, payload: { userId, email, login, isAuth } });

export const getAuthUserData = () => (dispatch) => {
    return authAPI.me().then(response => {
        if (response.data.resultCode === 0) {//if we ARE authorised we set isAuth = true
            let { id, email, login } = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    })
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
            dispatch(stopSubmit('login', { _error: message }))
        }
    })
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
}

export default authReducer