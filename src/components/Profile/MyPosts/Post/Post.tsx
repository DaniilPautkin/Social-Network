import React from 'react'
import s from './Post.module.css'

type PropsType = {
    message: string
    likesCount: number
}

const Post: React.FC<PropsType> = (props) => {
    return (
        <div className={s.item}>
            <h2>
                {' '}
                <img
                    alt=""
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzeQleJAtLe0BrQqEF1NUWfTDWF9MKnymUWBkD0fUDK0D0JTeM8g&s"
                />
                {props.message}
            </h2>
            <p>Likes {props.likesCount}</p>
        </div>
    )
}

export default Post
