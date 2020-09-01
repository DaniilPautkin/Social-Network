import { AppStateType } from './redux-store'

export const getProfileState = (state: AppStateType) => {
    return state.profilePage.status
}

export const getProfile = (state: AppStateType) => {
    return state.profilePage.profile
}

export const getProfilePosts = (state: AppStateType) => {
    return state.profilePage.posts
}