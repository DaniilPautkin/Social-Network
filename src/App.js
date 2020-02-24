import React from 'react';
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import DialoguesContainer from "./components/Dialogues/DialoguesContainer";
import { Route, withRouter } from "react-router-dom";
import "./App.css"
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login"
import MusicContainer from './components/Music/MusicContainer';
import NewsContainer from './components/News/NewsContainer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer'
import { initialize } from 'redux-form';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    } else {
      return (
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="app-wrapper-content">
            <Route path="/Dialogues" render={() => <DialoguesContainer />} />
            <Route path="/Profile/:UserId?" render={() => <ProfileContainer />} />
            <Route exact path="/Music" render={() => <MusicContainer />} />
            <Route exact path="/News" render={() => <NewsContainer />} />
            <Route exact path="/Users" render={() => <UsersContainer />} />
            <Route exact path="/login" render={() => <Login />} />


          </div>
        </div>
      );
    }
  }
};

const MapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(MapStateToProps, { initializeApp }),
)(App);

