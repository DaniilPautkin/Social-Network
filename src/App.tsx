import React from 'react'
import { connect, Provider } from 'react-redux'
import {
    BrowserRouter,
    Redirect,
    Route,
    Switch,
    withRouter,
} from 'react-router-dom'
import { compose } from 'redux'
import './App.css'
import Preloader from './components/common/Preloader/Preloader'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'
import MusicContainer from './components/Music/MusicContainer'
import Navbar from './components/Navbar/Navbar'
import NewsContainer from './components/News/NewsContainer'
import Settings from './components/Settings/Settings'
import UsersContainer from './components/Users/UsersContainer'
import { withSuspense } from './hoc/withSuspense'
import { initializeApp } from './redux/app-reducer'
import store, { AppStateType } from './redux/redux-store'

const DialoguesContainer = React.lazy(() =>
    import('./components/Dialogues/DialoguesContainer')
)
const ProfileContainer = React.lazy(() =>
    import('./components/Profile/ProfileContainer')
)

const SuspendedDialogues = withSuspense(DialoguesContainer)
const SuspendedProfile = withSuspense(ProfileContainer)

type MapPropsType = ReturnType<typeof MapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
}

class App extends React.Component<MapPropsType & DispatchPropsType> {
    catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        alert('Error')
    }

    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener(
            'unhandledrejection',
            this.catchAllUnhandledErrors
        )
    }

    componentWillUnmount() {
        window.removeEventListener(
            'unhandledrejection',
            this.catchAllUnhandledErrors
        )
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
                        <Switch>
                            <Route
                                path="/profile/:UserId?"
                                render={() => <SuspendedProfile />}
                            />
                            <Route
                                path="/dialogues"
                                render={() => <SuspendedDialogues />}
                            />
                            <Route
                                path="/news"
                                render={() => <NewsContainer />}
                            />
                            <Route
                                path="/music"
                                render={() => <MusicContainer />}
                            />
                            <Route
                                path="/settings"
                                render={() => <Settings />}
                            />
                            <Route
                                path="/users"
                                render={() => <UsersContainer />}
                            />
                            <Route path="/login" render={() => <Login />} />
                            <Route
                                exact
                                path="/"
                                render={() => <Redirect to="/profile" />}
                            />
                            <Route
                                path="*"
                                render={() => (
                                    <div className="notFoundPage">
                                        <h1>404</h1>
                                        <h3>Page not found</h3>
                                    </div>
                                )}
                            />
                        </Switch>
                    </div>
                </div>
            )
        }
    }
}

const MapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized,
})

let AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(MapStateToProps, { initializeApp })
)(App)

const SocialApp: React.FC = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    )
}

export default SocialApp
