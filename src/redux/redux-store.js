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
import { compose } from "redux";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialoguesPage: dialogueReducer,
    friendsBar: friendsBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,

});

let store = createStore(reducers, compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
));

window.__store__ = store; //get store from console.log(store.getState()...)

export default store;