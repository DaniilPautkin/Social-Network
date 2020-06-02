import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";
import { actions } from "./profile-reducer";

let state = {
    posts: [
        { id: 0, message: "How", likesCount: "0" },
        { id: 1, message: "Nice", likesCount: "55" }
    ],
    profile: null,
    status: '',
    newPostText: ''
}

test('length of posts should be incremented', () => {
    //origins data
    let action = addPostActionCreator('huh kak prosto');
    //action
    let newState = profileReducer(state, action)

    //expecatiton
    expect(newState.posts.length).toBe(5)
});

test('message of new post should be correct', () => {
    //origins data
    let action = addPostActionCreator('huh kak prosto');
    //action
    let newState = profileReducer(state, action)

    //expecatiton
    expect(newState.posts[4].message).toBe('huh kak prosto')
});

test('length after deleting message should be decremented', () => {
    //origins data
    let action = actions.deletePost(1);
    //action
    let newState = profileReducer(state, action)

    //expecatiton
    expect(newState.posts.length).toBe(3)
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    // 1. test data
    let action = actions.deletePost(1000);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(4);
});