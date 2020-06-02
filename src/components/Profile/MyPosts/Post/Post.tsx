import React from 'react'
import s from './Post.module.css'
import userphoto from '../../../../assets/images/USER.png'
type PropsType = {
    message: string
    likesCount: number
}

const Post: React.FC<PropsType> = (props) => {
    return (
        <div className={s.item}>
            <h2>
                {' '}
                <img alt="" src={userphoto} />
                {props.message}
            </h2>
            <p>Likes {props.likesCount}</p>
        </div>
    )
}

export default Post
