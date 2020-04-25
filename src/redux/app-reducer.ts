import { getAuthUserData } from "./auth-reducer"

const INITIALIZED_SUCCESS = 'SET-INITIALIZED'

type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false
}

const appReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state
    }
}

type InitialSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}

export const initializingSuccess = (): InitialSuccessActionType => ({
    type: INITIALIZED_SUCCESS
})

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise]).then(() => { //if all promises that are in [] brackets are returned *then* we will change initializing to true
        dispatch(initializingSuccess())
    })

}

export default appReducer