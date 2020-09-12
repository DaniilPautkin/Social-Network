import { AppStateType } from './redux-store'

export const getIsAuth = (state: AppStateType) => {
    return state.auth.isAuth
}

export const getAuthUserId = (state: AppStateType) => {
    return state.auth.userId
}

export const getCaptchaUrl = (state: AppStateType) => {
    return state.auth.captchaUrl
}

export const getAuthLogin = (state: AppStateType) => {
    return state.auth.login
}