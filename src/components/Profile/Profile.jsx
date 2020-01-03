import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";

const Profile = (props) => {
  return (
    <concent className={s.cont}>
      <Profileinfo />
      <MyPosts newPostText={props.state.newPostText} updNewPostText={props.updNewPostText} posts={props.state.posts} addPost={props.addPost} />
    </concent>
  );
};

export default Profile;
