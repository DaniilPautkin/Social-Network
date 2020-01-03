import { rerenderEntireTree } from "../render";

let state = {

    profilePage: {
        posts: [
            { id: 0, message: "How", likesCount: "0" },
            { id: 1, message: "Nice", likesCount: "55" }
        ],
        newPostText: "my-web-app"
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
    },

    friendsBar: {
        people: [
            { id: 0, name: "nnn" }
        ]
    }

}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5, message: postMessage, likesCount: "0"
    }
    state.profilePage.posts.push = (newPost);
    rerenderEntireTree(state);

}

export let updNewPostText = (newText) => {
    state.profilePage.posts.newPostText = newText;
    rerenderEntireTree(state);

}

export default state;