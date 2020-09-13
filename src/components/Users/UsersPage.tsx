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
    getIsFetching,
} from '../../redux/users-selectors'
import { useSelector, useDispatch } from 'react-redux'
import Preloader from '../common/Preloader/Preloader'
import { useHistory } from 'react-router-dom'
import * as queryString from 'querystring'

export const Users: React.FC = ({ ...props }) => {
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const users = useSelector(getUsersSelector)
    const followingInProgress = useSelector(getFollowingInProgress)

    const isFetching = useSelector(getIsFetching)

    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        const parsed = queryString.parse(history.location.search.substr(1)) as QueryParamsType

        let actualPage = currentPage
        let actualFilter = filter
        
        if(!!parsed.page) actualPage = +parsed.page
        if(!!parsed.term) actualFilter = {...actualFilter, term: parsed.term as string}
        if(!!parsed.friend) actualFilter = {...actualFilter, friend: parsed.friend === 'null' ? null : parsed.friend === 'true' ? true : false}

        dispatch(requestUsers(actualPage, pageSize, actualFilter))
    }, [])

    useEffect(() => {

        let query: QueryParamsType = {}

        if(!!filter.term) query.term = filter.term
        if(filter.friend !== null) query.friend = String(filter.friend)
        if(currentPage !== 1) query.page = String(currentPage)

        history.push({
            pathname: '/users',
            search: queryString.stringify(query)
        })
    }, [filter, currentPage])
    
    const onPageChanged = (pageNumber: number) => dispatch(requestUsers(pageNumber, pageSize, filter))
    const onFilterChanged = (filter: FilterType) => dispatch(requestUsers(1, pageSize, filter))
    const followUser = (userId: number) => dispatch(follow(userId))
    const unfollowUser = (userId: number) => dispatch(unfollow(userId))

    return (
        <>{isFetching ? <Preloader /> : 
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
        }</>
    )
}

type QueryParamsType = { page?: string, friend?: string, term?: string}
