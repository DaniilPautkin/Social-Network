import profileReducer from "./profile-reducer"
import dialogueReducer from "./dialogue-reducer"
import friendsBarReducer from "./friends-bar-reducer"

export let rerenderEntireTree = () => {
    console.log("state changed")
}

let store = {

    _state: {
        profilePage: {

        },

        dialoguesPage: {
            dialoguesData: [
                { id: 0, name: "dimych" },
                { id: 1, name: "Sveta" },
                { id: 2, name: "Dania" },
                { id: 3, name: "Diana" },
                { id: 4, name: "Velar" }
            ],
            messagesData: [
                { id: 0, message: "hi" },
                { id: 1, message: "Nice" },
                { id: 2, message: "Uou" },
            ],
            newMessageText: ""
        },

        friendsBar: {
            people: [
                { id: 0, name: "nnn" }
            ]
        }
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialoguesPage = dialogueReducer(this._state.dialoguesPage, action)
        this._state.friendsBar = friendsBarReducer(this._state.friendsBar, action)

        this._callSubscriber(this._state)

    },

    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('State changed');
    },

    updNewPostText(newText) {
    },
    subscribe(observer) {
        this._callSubscriber = observer;  // observer
    }
}







window.state = store;
//
export default store;