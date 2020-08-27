import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'Hi< how are you?', likesCount: 12},
        {id: 2, message: 'Hello.  All is good!', likesCount: 11}
    ]
};


test('after deleting length of messages should be decrement', () => {
    let action = deletePost(1);

    let newState = profileReducer(state,action);

    expect(newState.posts.length).toBe(1);
});

test('length of posts should be incremented', () => {
    let action = addPostActionCreator('it-kamasutra.com');

    let newState = profileReducer(state,action);

    expect(newState.posts.length).toBe(3);
});

test('message of new post should be correct', () => {
    let action = addPostActionCreator('it-kamasutra.com');

    let newState = profileReducer(state,action);


    expect(newState.posts[2].message).toBe('it-kamasutra.com');
});