import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogues from "./components/Dialogues/Dialogues";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import { Route } from "react-router-dom";

const App = (props) => {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/Dialogues" render={() => <Dialogues
          state={props.state.dialoguesPage} />} />
        <Route
          exact path="/Profile" render={() => <Profile
            addPost={props.addPost} state={props.state.profilePage} updNewPostText={props.updNewPostText} />}
        />
        <Route exact path="/Music" render={() => <Music />} />
        <Route exact path="/News" render={() => <News />} />
      </div>
    </div>
  );
};

export default App;
