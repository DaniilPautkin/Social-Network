import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { required, MaxLenghtCreator } from "../../../utils/validators/validators"
import { Textarea } from "../../common/FormsControls/FormsControls";

let maxLength10 = MaxLenghtCreator(10)

const addNewPost = (props) => {
  return <form action="" onSubmit={props.handleSubmit}>
    <div>
      <Field component={Textarea} name={"newPostText"} validate={[required, maxLength10]} />
    </div>
    <div>
      <button>post</button>
    </div>
  </form>
}

let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(addNewPost);

const MyPosts = (props) => {
  let postsElements =
    props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    alert(values.newPostText)
    props.addPost(values.newPostText);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}




export default MyPosts;
