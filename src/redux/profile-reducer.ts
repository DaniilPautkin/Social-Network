import { InferActionsTypes, BasicThunkType } from './redux-store';
import { PostType, ProfileType, PhotosType } from './../types/types'
import { profileAPI } from "../api/profile-api"
import { stopSubmit, FormAction } from "redux-form"

export type SavePhotoResponseDataType = {
    photos: PhotosType
}

let initialState = {
    posts: [
        { id: 0, message: "Message", likesCount: 0 },
        { id: 1, message: "Todo", likesCount: 55 }
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    newPostText: ''
}


const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {

        case 'SN/PROFILE/ADD-POST':
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            };

        case 'SN/PROFILE/SET-USER-PROFILE':
            return { ...state, profile: action.profile }
        case 'SN/PROFILE/SET-STATUS':
            return {
                ...state, status: action.status
            }
        case 'SN/PROFILE/DELETE-POST':
            return { ...state, posts: state.posts.filter(p => p.id != action.postId) }

        case 'SN/PROFILE/SAVE-PHOTO-SUCCESS':
            return { ...state, profile: { ...state.profile, photos: action.photos } as ProfileType }

        default:
            return state
    }
}



export const actions = {
    addPost: (newPostText: string) => ({ type: 'SN/PROFILE/ADD-POST', newPostText } as const),

    setUserProfile: (profile: ProfileType) => ({ type: 'SN/PROFILE/SET-USER-PROFILE', profile } as const),

    setStatus: (status: string) => ({ type: 'SN/PROFILE/SET-STATUS', status } as const),

    deletePost: (postId: number) => ({ type: 'SN/PROFILE/DELETE-POST', postId } as const),

    savePhotoSuccess: (photos: PhotosType) => ({ type: 'SN/PROFILE/SAVE-PHOTO-SUCCESS', photos } as const),

}

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
    const data = await profileAPI.getProfile(userId)

    dispatch(actions.setUserProfile(data))
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)

    dispatch(actions.setStatus(data))
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    try {
        let data = await profileAPI.updateStatus(status)

        if (data.resultCode === 0) {
            dispatch(actions.setStatus(status))
        }
    } catch (error) {
    }
}

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    let data = await profileAPI.savePhotos(file)

    if (data.resultCode === 0) {
        dispatch(actions.savePhotoSuccess(data.data.photos))
    }
}

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const data = await profileAPI.saveProfile(profile)
    // alert(response.data)
    if (data.resultCode === 0) {
        if (userId != null) {
            dispatch(getUserProfile(userId))
        } else {
            throw new Error(`userId can't be null`)
        }
    } else {
        dispatch(stopSubmit("edit-profile", { _error: data.messages[0] }))
        return Promise.reject(data.messages[0])
    }
}

type ActionsType = InferActionsTypes<typeof actions>
export type InitialStateType = typeof initialState
type ThunkType = BasicThunkType<ActionsType | FormAction>

export default profileReducer
