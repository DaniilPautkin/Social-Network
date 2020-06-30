import React from 'react'
import userphoto from '../../../../assets/images/USER.png'
import { StyledPost } from '../../../../styles/Posts-styles'

type PropsType = {
    message: string
    likesCount: number
}

const Post: React.FC<PropsType> = (props) => {
    return (
        <StyledPost>
            <h2>
                {' '}
                <img alt="" src={userphoto} />
                {props.message}
            </h2>
            <p>Likes {props.likesCount}</p>
        </StyledPost>
    )
}

export default Post
