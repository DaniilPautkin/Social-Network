import React from 'react'
import { PostType } from '../../../types/types'
import AddNewPostFormRedux, {
    AddPostValuesType,
} from './AddPostForm/AddPostForm'
import s from './MyPosts.module.css'
import Post from './Post/Post'

export type MapPropsType = {
    posts: Array<PostType>
}

export type DispatchPropsType = {
    addPost: (newPostText: string) => void
}

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = (props) => {
    let postsElements = [...props.posts]
        .reverse()
        .map((p) => (
            <Post key={p.id} message={p.message} likesCount={p.likesCount} />
        ))

    let onAddPost = (values: AddPostValuesType) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={s.posts}>{postsElements}</div>
        </div>
    )
}

const MyPostsMemoized = React.memo(MyPosts)

export default MyPostsMemoized
