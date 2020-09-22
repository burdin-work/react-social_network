import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi< how are you?', likesCount: 12},
        {id: 2, message: 'Hello. All is good!', likesCount: 11}
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST:
            let newPost = {id: 5,message: action.newPostBody, likesCount: 0};
            return {
                ...state,
                posts : [...state.posts, newPost]
            };
        case DELETE_POST:
            return {
                ...state,
                posts : [state.posts.filter(p => p.id != action.postId)]
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos},

            }

        default:
            return state;
    }
}


export const addPostActionCreator = (newPostBody) => ({type: ADD_POST, newPostBody})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await usersAPI.getProfile(userId);
        dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
    try {
    const response = await profileAPI.updateStatus(status);
        if(response.data.resultCode === 0){
            dispatch(setStatus(status));
        }
    }
    catch (error) {

    }
}
export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file);
    if(response.data.resultCode === 0){
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    if(response.data.resultCode === 0){
        dispatch(getUserProfile(userId));
    } else {
        let kindError = response.data.messages[0];
        let messageError = '';
        if(kindError) {
            kindError = response.data.messages[0]; //.split('->')[1].split(')')[0];
            messageError = ' has invalid url format. Change it please.'
        }
        let errors = {};
        errors[kindError.toLowerCase()] = kindError + messageError;

        dispatch(stopSubmit("edit-profile", {"contacts" : errors }));

        return Promise.reject(kindError);
    }
}

export default profileReducer;