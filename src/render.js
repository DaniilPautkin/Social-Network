import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';
import { addPost, updNewPostText } from "./redux/state"
import { BrowserRouter } from "react-router-dom"


export let rerenderEntireTree = (state) => {
  ReactDOM.render(<BrowserRouter>
    <App state={state} addPost={addPost} updNewPostText={updNewPostText} />
  </BrowserRouter>, document.getElementById('root'))
};
