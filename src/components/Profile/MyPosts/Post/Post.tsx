import React from 'react'
import userphoto from '../../../../assets/images/USER.png'
import { StyledPost, PostImg } from '../../../../styles/Posts-styles'
import { Likes } from '../../../../styles/Profile-styles'

type PropsType = {
    message: string
    likesCount: number
}

const Post: React.FC<PropsType> = (props) => {
    return (
        <StyledPost>
            <h2>
                {' '}
                <PostImg alt="" src={userphoto} />
                {props.message}
            </h2>
            <Likes>Likes {props.likesCount}</Likes>
        </StyledPost>
    )
}

export default Post
