import React from 'react'
import Profileinfo from './Profileinfo/Profileinfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import { ProfileType } from '../../types/types'

type PropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (props: ProfileType) => Promise<any>
    profile: ProfileType | null
    status: string
    isOwner: boolean
}

const Profile: React.FC<PropsType> = (props) => {
    return (
        <div>
            <Profileinfo
                saveProfile={props.saveProfile}
                savePhoto={props.savePhoto}
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
            />
            <MyPostsContainer />
        </div>
    )
}

export default Profile
