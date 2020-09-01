import { AppStateType } from './redux-store'

export const getDialoguesPage = (state: AppStateType) => {
    return state.dialoguesPage
}