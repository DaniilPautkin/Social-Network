import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";






const MyPosts = (props) => {

  let postArr =
    props.posts.map(ps => (
      <Post className={s.post} message={ps.message} likesCount={ps.likesCount} />
    ))


  let newPostElement = React.createRef();


  let addMyPost = () => {
    let ptext = newPostElement.current.value;
    props.addPost(ptext);
    props.updNewPostText('');

  }

  let onPostChng = () => {
    let text = newPostElement.current.value;
    props.updNewPostText(text)
  }


  return (
    <div className={s.postsBlock}>
      <div>
        <h3>My Posts</h3>
        <div>
          <div className="">
            <textarea onChange={onPostChng} cols="5" rows="2" ref={newPostElement} />
          </div>
          <div className="">
            <button onClick={addMyPost}>Add Post</button>
          </div>
        </div>
      </div>
      <div className={s.posts}>
        {postArr}
      </div>
    </div>
  );
};

export default MyPosts;
