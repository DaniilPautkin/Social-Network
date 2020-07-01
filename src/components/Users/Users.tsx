import React from 'react'
import { StyledUsersContainer, UsersPage } from '../../styles/Users-styles'
import { UserType } from '../../types/types'
import Paginator from '../common/Paginator/Paginator'
import User from './User'

type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize?: number
    users: Array<UserType>
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

let Users: React.FC<UsersType> = ({
    currentPage,
    totalUsersCount,
    pageSize,
    onPageChanged,
    users,
    ...props
}) => {
    return (
        <UsersPage>
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
                        followingInProgress={props.followingInProgress}
                        key={u.id}
                        unfollow={props.unfollow}
                        follow={props.follow}
                    />
                ))}
            </StyledUsersContainer>
        </UsersPage>
    )
}

export default Users
