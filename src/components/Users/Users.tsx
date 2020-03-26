import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import { UserType } from '../../types/types';

type UsersType = {
    totalUsersCount: number;
    pageSize: number;
    currentPage: number;
    onPageChanged: () => void;
    portionSize?: number;
    users: Array<UserType>;
};

let Users: React.FC<UsersType> = ({
    currentPage,
    totalUsersCount,
    pageSize,
    onPageChanged,
    users,
    ...props
}) => {
    return (
        <div>
            <Paginator
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
            />
            <div>
                {users.map(u => (
                    <User
                        user={u}
                        followingInProgress={props.followingInProgress}
                        key={u.id}
                        unfollow={props.unfollow}
                        follow={props.follow}
                    />
                ))}
            </div>
        </div>
    );
};

export default Users;
