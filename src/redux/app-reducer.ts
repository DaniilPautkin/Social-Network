import { InferActionsTypes } from './redux-store';
import { getAuthUserData } from "./auth-reducer"

let initialState = {
    initialized: false
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/APP/SET-INITIALIZED':
            return {
                ...state,
                initialized: true
            }

        default:
            return state
    }
}

// export const initializingSuccess = (): InitialSuccessActionType => ({
//     type: INITIALIZED_SUCCESS
// })

export const actions = {
    initializingSuccess: () => ({
        type: 'SN/APP/SET-INITIALIZED'
    } as const)
}

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise]).then(() => { //if all promises that are in [] brackets are returned *then* we will change initializing to true
        dispatch(actions.initializingSuccess())
    })

}

export default appReducer