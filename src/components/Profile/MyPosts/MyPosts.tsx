import React from 'react'
import { PostElemets, PostsContainer } from '../../../styles/Posts-styles'
import { PostType } from '../../../types/types'
import AddNewPostFormRedux, {
    AddPostValuesType,
} from './AddPostForm/AddPostForm'
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
        <PostsContainer>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <PostElemets>{postsElements}</PostElemets>
        </PostsContainer>
    )
}

const MyPostsMemoized = React.memo(MyPosts)

export default MyPostsMemoized
