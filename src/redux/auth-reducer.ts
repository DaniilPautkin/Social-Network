import { stopSubmit } from 'redux-form'
import { authAPI } from '../api/auth-api'
import { securityAPI } from '../api/security-api'
import { ResultCodeForCaptcha, ResultCodesEnum } from './../api/api'
import { BasicThunkType, InferActionsTypes } from './redux-store'

let initialState = {
    userId: null as number | null,
    isAuth: false,
    email: null as string | null,
    login: null as string | null,
    isFetching: true,
    captchaUrl: null as string | null //if null - captcha is not required
}


const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/auth/SET-AUTH-USER-DATA':
            return {
                ...state,
                ...action.payload
            }

        case 'SN/security/GET-CAPTCHA-URL-SUCCESS':
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}

export const actions = {
    setAuthUserData: (
        userId: number | null,
        login: string | null,
        email: string | null,
        isAuth: boolean) => ({
            type: 'SN/auth/SET-AUTH-USER-DATA',
            payload: { userId, login, email, isAuth }
        } as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => ({
        type: 'SN/security/GET-CAPTCHA-URL-SUCCESS',
        payload: { captchaUrl }
    } as const)
}


export const getAuthUserData = (): ThunkType => async (dispatch) => {
    let meData = await authAPI.me()

    if (meData.resultCode === ResultCodesEnum.Success) {
        //if we ARE authorised we set isAuth = true
        let { id, login, email } = meData.data
        dispatch(actions.setAuthUserData(id, login, email, true))
    }
}

export const login = (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string): ThunkType => async (dispatch) => {
        let data = await authAPI.login(email, password, rememberMe, captcha)

        if (data.resultCode === ResultCodesEnum.Success) {
            dispatch(getAuthUserData())
        } else {
            if (data.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
                //if server data with resultCode 10 we need to request captchaUrl
                dispatch(getCaptchaUrl())
            }
            let message =
                data.messages.length > 0
                    ? data.messages[0]
                    : 'Some error'
            dispatch(stopSubmit('login', { _error: message }))
        }
    }

export const logout = (): ThunkType => async (dispatch) => {
    let data = await authAPI.logout()

    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.setAuthUserData(null, null, null, false))
    }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl()
    const captchaUrl = data.url

    dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
}

export type InitialStateType = typeof initialState                              // IS
type ThunkType = BasicThunkType<ActionsType | ReturnType<typeof stopSubmit>>    // thunk
type ActionsType = InferActionsTypes<typeof actions>                            // actions


export default authReducer
