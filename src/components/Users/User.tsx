import React from 'react'
import { NavLink } from 'react-router-dom'
import userPhoto from '../../assets/images/USER.png'
import {
    UserContainer,
    UserPhoto,
    UserName,
    UserInfo,
} from '../../styles/Users-styles'
import { UserType } from '../../types/types'
import { Button } from 'antd'
import Text from 'antd/lib/typography/Text'

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
                <UserInfo>
                    <UserName>{user.name}</UserName>
                    {user.status ? <Text code>{user.status}</Text> : ''}
                </UserInfo>
                {user.followed ? (
                    <Button
                        disabled={followingInProgress.some(
                            (id) => id === user.id
                        )}
                        onClick={() => {
                            unfollow(user.id)
                        }}
                    >
                        Unfollow
                    </Button>
                ) : (
                    <Button
                        disabled={followingInProgress.some(
                            (id) => id === user.id
                        )}
                        onClick={() => {
                            follow(user.id)
                        }}
                    >
                        Follow
                    </Button>
                )}
            </div>
        </UserContainer>
    )
}

export default User
