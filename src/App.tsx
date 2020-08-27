import { message } from 'antd'
import 'antd/dist/antd.css'
import React from 'react'
import { connect, Provider } from 'react-redux'
import {
    HashRouter,
    Redirect,
    Route,
    Switch,
    withRouter,
} from 'react-router-dom'
import { compose } from 'redux'
import Preloader from './components/common/Preloader/Preloader'
import HeaderContainer from './components/Header/HeaderContainer'
import MusicContainer from './components/Music/MusicContainer'
import Navbar from './components/Navbar/Navbar'
import NewsContainer from './components/News/NewsContainer'
import Settings from './components/Settings/Settings'
import { UsersPage } from './components/Users/UsersPage'
import { withSuspense } from './hoc/withSuspense'
import { initializeApp } from './redux/app-reducer'
import store, { AppStateType } from './redux/redux-store'
import { Main, MainWrapper } from './styles/App-styles'
import { LoginPage } from './components/Login/LoginPage'

const DialoguesContainer = React.lazy(
    () => import('./components/Dialogues/DialoguesContainer')
)
const ProfileContainer = React.lazy(
    () => import('./components/Profile/ProfileContainer')
)

const SuspendedDialogues = withSuspense(DialoguesContainer)
const SuspendedProfile = withSuspense(ProfileContainer)

type MapPropsType = ReturnType<typeof MapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
}

class App extends React.Component<MapPropsType & DispatchPropsType> {
    catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        message.error(`${e.reason}`)
    }

    componentDidMount() {
        document.title = 'Social-Network'
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
                <MainWrapper>
                    <HeaderContainer />
                    <Navbar />
                    <Main>
                        <Switch>
                            <Route
                                path='/profile/:userId?'
                                render={() => <SuspendedProfile />}
                            />
                            <Route
                                path='/dialogues'
                                render={() => <SuspendedDialogues />}
                            />
                            <Route
                                path='/news'
                                render={() => <NewsContainer />}
                            />
                            <Route
                                path='/music'
                                render={() => <MusicContainer />}
                            />
                            <Route
                                path='/settings'
                                render={() => <Settings />}
                            />
                            <Route path='/users' render={() => <UsersPage />} />
                            <Route path='/login' render={() => <LoginPage />} />
                            <Route
                                exact
                                path='/'
                                render={() => <Redirect to='/profile' />}
                            />
                            <Route
                                path='*'
                                render={() => (
                                    <div className='notFoundPage'>
                                        <h1>404</h1>
                                        <h3>Page not found</h3>
                                    </div>
                                )}
                            />
                        </Switch>
                    </Main>
                </MainWrapper>
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
        <HashRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </HashRouter>
    )
}

export default SocialApp
