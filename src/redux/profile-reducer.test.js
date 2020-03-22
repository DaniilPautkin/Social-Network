import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
    posts: [
        { id: 0, message: "How", likesCount: "0" },
        { id: 1, message: "Nice", likesCount: "55" }
    ]
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
    let action = deletePost(1);
    //action
    let newState = profileReducer(state, action)

    //expecatiton
    // expect(newState.posts.length).toBe(3)
});
