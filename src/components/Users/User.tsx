import Text from 'antd/lib/typography/Text'
import React from 'react'
import { NavLink } from 'react-router-dom'
import userPhoto from '../../assets/images/USER.png'
import { StyledDefaultButton } from '../../styles/App-styles'
import {
    StyledUserContainer,
    UserInfo,
    UserName,
    UserPhoto,
} from '../../styles/Users-styles'
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
    // FIX: move to common
    let string: string | null = user.status
    let statusLength: number = 10
    let trimmedStatus: string | null =
        string && string.length > statusLength
            ? string.substring(0, statusLength - 3) + '...'
            : string

    return (
        <StyledUserContainer>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <UserPhoto
                        src={
                            user.photos.small != null
                                ? user.photos.small
                                : userPhoto
                        }
                        alt=''
                    />
                </NavLink>
            </div>
            <div>
                <UserInfo>
                    <UserName>{user.name}</UserName>
                    {user.status ? <Text code>{trimmedStatus}</Text> : ''}
                </UserInfo>
                {user.followed ? (
                    <StyledDefaultButton
                        disabled={followingInProgress.some(
                            (id) => id === user.id
                        )}
                        onClick={() => {
                            unfollow(user.id)
                        }}
                    >
                        Unfollow
                    </StyledDefaultButton>
                ) : (
                    <StyledDefaultButton
                        disabled={followingInProgress.some(
                            (id) => id === user.id
                        )}
                        onClick={() => {
                            follow(user.id)
                        }}
                    >
                        Follow
                    </StyledDefaultButton>
                )}
            </div>
        </StyledUserContainer>
    )
}

export default User
