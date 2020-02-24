import { combineReducers, createStore } from "redux"

import dialogueReducer from "./dialogue-reducer";
import profileReducer from "./profile-reducer";
import friendsBarReducer from "./friends-bar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { applyMiddleware } from "redux";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialoguesPage: dialogueReducer,
    friendsBar: friendsBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;