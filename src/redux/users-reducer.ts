import { Dispatch } from 'react'
import { usersAPI } from '../api/users-api'
import { updateObjectInArray } from "../utils/object-helpers"
import { UserType } from './../types/types'
import { BasicThunkType, InferActionsTypes } from './redux-store'

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number> //array of users ids   
}

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SN/USERS/FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: true })
            }
        case 'SN/USERS/UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: false })
            }
        case 'SN/USERS/SET_USERS': {
            return { ...state, users: action.users }
        }
        case 'SN/USERS/SET_CURRENT_PAGE': {
            return { ...state, currentPage: action.currentPage }
        }
        case 'SN/USERS/SET_USERS_TOTAL_COUNT': {
            return { ...state, totalUsersCount: action.totalUsersCount }
        }
        case 'SN/USERS/TOGGLE_IS_FETCHING': {
            return { ...state, isFetching: action.isFetching }
        }
        case 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS': {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
}



export const usersActions = {
    followSuccess: (userId: number) => ({ type: 'SN/USERS/FOLLOW', userId } as const),
    unfollowSuccess: (userId: number) => ({ type: 'SN/USERS/UNFOLLOW', userId } as const),
    setUsers: (users: Array<UserType>) => ({ type: 'SN/USERS/SET_USERS', users } as const),
    setCurrentPage: (currentPage: number) => ({ type: 'SN/USERS/SET_CURRENT_PAGE', currentPage } as const),
    setTotalUsersCount: (totalUsersCount: number) => ({ type: 'SN/USERS/SET_USERS_TOTAL_COUNT', totalUsersCount } as const),
    toggleIsFetching: (isFetching: boolean) => ({ type: 'SN/USERS/TOGGLE_IS_FETCHING', isFetching } as const),
    toggleFollowingProgress: (isFetching: boolean, userId: number) => ({ type: 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId } as const)
}

export const requestUsers = (page: number, pageSize: number): ThunkType => {
    return async (dispatch, getState) => {
        dispatch(usersActions.setCurrentPage(page))
        dispatch(usersActions.toggleIsFetching(true))

        let data = await usersAPI.getUsers(page, pageSize)

        dispatch(usersActions.setUsers(data.items))
        dispatch(usersActions.setTotalUsersCount(data.totalCount))
        dispatch(usersActions.toggleIsFetching(false))
    }
}

const _followUnfollowToggle = async (dispatch: any, userId: number, apiMethod: any, actionCreator: (userId: number) => ActionsTypes) => {

    dispatch(usersActions.toggleFollowingProgress(true, userId))
    let response = await apiMethod(userId)

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(usersActions.toggleFollowingProgress(false, userId))
}
export const follow = (userId: number): ThunkType => {
    return async (dispatch: Dispatch<ActionsTypes>) => {
        _followUnfollowToggle(dispatch, userId, usersAPI.follow.bind(usersAPI), usersActions.followSuccess)
    }
}
export const unfollow = (userId: number): ThunkType => {
    return async (dispatch: Dispatch<ActionsTypes>) => {
        _followUnfollowToggle(dispatch, userId, usersAPI.unfollow.bind(usersAPI), usersActions.unfollowSuccess)
    }
}

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof usersActions>
type ThunkType = BasicThunkType<ActionsTypes>

export default usersReducer