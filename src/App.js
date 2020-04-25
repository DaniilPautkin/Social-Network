import React from 'react'
import "./App.css"
import HeaderContainer from "./components/Header/HeaderContainer"
import UsersContainer from './components/Users/UsersContainer'
import MusicContainer from './components/Music/MusicContainer'
import NewsContainer from './components/News/NewsContainer'
import Preloader from './components/common/Preloader/Preloader'
import Navbar from "./components/Navbar/Navbar"
import Login from "./components/Login/Login"
import { Route, withRouter, Switch, Redirect } from "react-router-dom"
import { connect } from 'react-redux'
import { compose } from 'redux'
import { initializeApp } from './redux/app-reducer'

import store from "./redux/redux-store"
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux'
import { withSuspense } from './hoc/withSuspense'
import Settings from './components/Settings/Settings'

const DialoguesContainer = React.lazy(() => import('./components/Dialogues/DialoguesContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

class App extends React.Component {
    catchAllUnhandledErrors = (reason, promise) => {
        alert("Error")
    }


    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)

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
                        <Switch >
                            <Route path="/profile/:UserId?" render={withSuspense(ProfileContainer)} />
                            <Route path="/dialogues" render={withSuspense(DialoguesContainer)} />
                            <Route path="/news" render={() => <NewsContainer />} />
                            <Route path="/music" render={() => <MusicContainer />} />
                            <Route path="/settings" render={() => <Settings />} />
                            <Route path="/users" render={() => <UsersContainer />} />
                            <Route path="/login" render={() => <Login />} />
                            <Route exact path="/" render={() => <Redirect to='/profile' />} />
                            <Route path="*" render={() => <div className="notFoundPage">
                                <h1>404</h1>
                                <h3>Page not found</h3>
                            </div>} />
                        </Switch >
                    </div>
                </div>
            )
        }
    }
}

const MapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(MapStateToProps, { initializeApp }),
)(App)

const SocialApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default SocialApp