import React, { useEffect } from 'react'
import Profile from './Profile'
import {
    getUserProfile,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile,
} from '../../redux/profile-reducer'
import { connect } from 'react-redux'
import {
    withRouter,
    RouteComponentProps,
    useHistory,
    useParams,
} from 'react-router-dom'
import { compose } from 'redux'
import { AppStateType } from '../../redux/redux-store'
import { ProfileType } from '../../types/types'
import { getIsAuth, getAuthUserId } from '../../redux/auth-selector'
import { getProfileState, getProfile } from '../../redux/profile-selector'

type MapPropsType = ReturnType<typeof mapStateToProps>

type DispatchPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (props: ProfileType) => Promise<any>
}

type PathParamsType = {
    userId: string
}

type PropsType = MapPropsType &
    DispatchPropsType &
    RouteComponentProps<PathParamsType>

const ProfileContainer: React.FC<any> = (props) => {
    const history = useHistory()
    const { userId } = useParams()

    const refreshProfile = () => {
        if (!userId) {
            !props.loggedUserId && history.push('/login')

        if (!props.loggedUserId) {

            console.error('userId is missing in URI or state')

        } else {
            props.getUserProfile(userId)
            props.getStatus(userId)
        }
    }
    }

    useEffect(() => refreshProfile(), [])

    // useEffect(() => {
    //     if (userId !== userId1) {
    //         refreshProfile()
    //     }
    // }, [userId])

    return (
        <>
            <Profile
                {...props}
                isOwner={!props.match.params.userId}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                savePhoto={props.savePhoto}
                saveProfile={props.saveProfile}
            />
        </>
    )
}

const mapStateToProps = (state: AppStateType) => ({
    profile: getProfile(state),
    status: getProfileState(state),
    loggedUserId: getAuthUserId(state),
    isAuth: getIsAuth(state),
})

export default connect(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus,
        savePhoto,
        saveProfile,
    })(ProfileContainer)