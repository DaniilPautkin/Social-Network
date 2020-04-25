import { AppStateType, InferActionsTypes } from './redux-store'
import { UserType } from './../types/types'
import { usersAPI } from "../api/api"
import { updateObjectInArray } from "../utils/object-helpers"
import { Dispatch } from 'react'
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux';



let initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number> //array of users ids   
}

export type InitialStateType = typeof initialState


const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: true })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: false })
            }
        case 'SET_USERS': {
            return { ...state, users: action.users }
        }
        case 'SET_CURRENT_PAGE': {
            return { ...state, currentPage: action.currentPage }
        }
        case 'SET_USERS_TOTAL_COUNT': {
            return { ...state, totalUsersCount: action.totalUsersCount }
        }
        case 'TOGGLE_IS_FETCHING': {
            return { ...state, isFetching: action.isFetching }
        }
        case 'TOGGLE_IS_FOLLOWING_PROGRESS': {
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

type ActionsTypes = InferActionsTypes<typeof usersActions>

export const usersActions = {
    followSuccess: (userId: number) => ({ type: 'FOLLOW', userId } as const),
    unfollowSuccess: (userId: number) => ({ type: 'UNFOLLOW', userId } as const),
    setUsers: (users: Array<UserType>) => ({ type: 'SET_USERS', users } as const),
    setCurrentPage: (currentPage: number) => ({ type: 'SET_CURRENT_PAGE', currentPage } as const),
    setTotalUsersCount: (totalUsersCount: number) => ({ type: 'SET_USERS_TOTAL_COUNT', totalUsersCount } as const),
    toggleIsFetching: (isFetching: boolean) => ({ type: 'TOGGLE_IS_FETCHING', isFetching } as const),
    toggleFollowingProgress: (isFetching: boolean, userId: number) => ({ type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId } as const)
}



type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const requestUsers = (page: number, pageSize: number): ThunkType => {
    return async (dispatch, getState) => {
        dispatch(usersActions.setCurrentPage(page))
        dispatch(usersActions.toggleIsFetching(true))

        let data = await usersAPI.getUsers(page, pageSize)
        dispatch(usersActions.toggleIsFetching(false))
        dispatch(usersActions.setUsers(data.items))
        dispatch(usersActions.setTotalUsersCount(data.totalCount))
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
    return async (dispatch: DispatchType) => {
        _followUnfollowToggle(dispatch, userId, usersAPI.follow.bind(usersAPI), usersActions.followSuccess)
    }
}
export const unfollow = (userId: number): ThunkType => {
    return async (dispatch: DispatchType) => {
        _followUnfollowToggle(dispatch, userId, usersAPI.unfollow.bind(usersAPI), usersActions.unfollowSuccess)
    }
}

export default usersReducer