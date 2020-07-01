import React from 'react'
import Profile from './Profile'
import {
    getUserProfile,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile,
} from '../../redux/profile-reducer'
import { connect } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { compose } from 'redux'
import { AppStateType } from '../../redux/redux-store'
import { ProfileType } from '../../types/types'

type MapPropsType = ReturnType<typeof mapStateToProps>

type DispatchPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (props: ProfileType) => Promise<any>
}

type PathParamsType = {
    UserId: string
}

type PropsType = MapPropsType &
    DispatchPropsType &
    RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<PropsType> {
    refreshProfile() {
        let UserId: number | null = +this.props.match.params.UserId
        if (!UserId) {
            UserId = this.props.loggedUserId
            // TODO: change history.push to Redirect
            if (!UserId) {
                this.props.history.push('/login')
            }
        }
        if (!UserId) {
            console.error('userId is missing in URI or state')
        } else {
            this.props.getUserProfile(UserId)
            this.props.getStatus(UserId)
        }
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
        if (this.props.match.params.UserId !== prevProps.match.params.UserId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <div>
                <Profile
                    {...this.props}
                    isOwner={!this.props.match.params.UserId}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                    savePhoto={this.props.savePhoto}
                    saveProfile={this.props.saveProfile}
                />
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    loggedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus,
        savePhoto,
        saveProfile,
    }),
    withRouter
)(ProfileContainer)
