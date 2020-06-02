import { combineReducers, createStore, Action } from "redux"

import dialogueReducer from "./dialogue-reducer"
import profileReducer from "./profile-reducer"
import friendsBarReducer from "./friends-bar-reducer"
import usersReducer from "./users-reducer"
import authReducer from "./auth-reducer"
import thunkMiddleware, { ThunkAction } from "redux-thunk"
import { applyMiddleware } from "redux"
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer"
import { compose } from "redux"

let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialoguesPage: dialogueReducer,
    friendsBar: friendsBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
})

type rootReducerType = typeof rootReducers
export type AppStateType = ReturnType<rootReducerType>
export type BasicThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>


// type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never // T extends obj that has property key, then find out what is type of U

// export type InferActionsTypes<T extends { [key: string]: (...arg: any) => any }> = ReturnType<PropertiesType<T>>

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

let store = createStore(rootReducers, compose(
    applyMiddleware(thunkMiddleware),
    //@ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
))

//@ts-ignore
window.__store__ = store //get store from console.log(store.getState()...)

export default store