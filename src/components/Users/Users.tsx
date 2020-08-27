import React, { useEffect } from 'react'
import { StyledUsersContainer, UsersPage } from '../../styles/Users-styles'
import Paginator from '../common/Paginator/Paginator'
import User from './User'
import UsersSearchForm from './UsersSearchForm'
import {
    FilterType,
    requestUsers,
    follow,
    unfollow,
} from '../../redux/users-reducer'
import {
    getTotalUsersCount,
    getCurrentPage,
    getPageSize,
    getUsersFilter,
    getUsersSelector,
    getFollowingInProgress,
} from '../../redux/users-selectors'
import { useSelector, useDispatch } from 'react-redux'

type PropsType = {}

export const Users: React.FC<PropsType> = ({ ...props }) => {
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const users = useSelector(getUsersSelector)
    const followingInProgress = useSelector(getFollowingInProgress)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize, filter))
    }, [])

    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter))
    }

    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter))
    }

    const followUser = (userId: number) => {
        dispatch(follow(userId))
    }

    const unfollowUser = (userId: number) => {
        dispatch(unfollow(userId))
    }

    return (
        <UsersPage>
            <UsersSearchForm onFilterChanged={onFilterChanged} />
            <Paginator
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
            />
            <StyledUsersContainer>
                {users.map((u) => (
                    <User
                        user={u}
                        followingInProgress={followingInProgress}
                        key={u.id}
                        unfollow={followUser}
                        follow={unfollowUser}
                    />
                ))}
            </StyledUsersContainer>
        </UsersPage>
    )
}
