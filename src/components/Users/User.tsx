import React from 'react'
import { NavLink } from 'react-router-dom'
import userPhoto from '../../assets/images/USER.png'
import { UserContainer, UserPhoto } from '../../styles/Users-styles'
import { UserType } from '../../types/types'

type PropsType = {
    user: UserType
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

let User: React.FC<PropsType> = ({
    user,
    followingInProgress,
    unfollow,
    follow,
}) => {
    return (
        <UserContainer>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <UserPhoto
                        src={
                            user.photos.small != null
                                ? user.photos.small
                                : userPhoto
                        }
                        alt=""
                    />
                </NavLink>
            </div>
            <div>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                {user.followed ? (
                    <button
                        disabled={followingInProgress.some(
                            (id) => id === user.id
                        )}
                        onClick={() => {
                            unfollow(user.id)
                        }}
                    >
                        Unfollow
                    </button>
                ) : (
                    <button
                        disabled={followingInProgress.some(
                            (id) => id === user.id
                        )}
                        onClick={() => {
                            follow(user.id)
                        }}
                    >
                        Follow
                    </button>
                )}
            </div>
        </UserContainer>
    )
}

export default User
