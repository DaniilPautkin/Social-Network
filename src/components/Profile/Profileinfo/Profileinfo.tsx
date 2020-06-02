import React, { useState, ChangeEvent } from 'react'
import s from './Profileinfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatus from './ProfileStatus'
import ProfileDataFormReduxForm from './ProfileDataForm'
import userPhoto from '../../../assets/images/USER.png'
import { ProfileType, ContactsType } from '../../../types/types'

type PropsType = {
    isOwner: boolean
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (props: ProfileType) => Promise<any>
}

const Profileinfo: React.FC<PropsType> = ({
    isOwner,
    profile,
    status,
    updateStatus,
    savePhoto,
    saveProfile,
}) => {
    let [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelect = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData: ProfileType) => {
        // todo: remove then
        saveProfile(formData).then(() => {
            setEditMode(false)
        })
    }

    return (
        <div className={s.ProfileInfo}>
            <div>
                <img
                    className={s.profileImg}
                    src={profile.photos.large || userPhoto}
                    alt=""
                />
                {isOwner && (
                    <div>
                        {/* <label htmlFor="inputFile">Upload photo</label> */}
                        <input
                            className={s.inputPhotos}
                            name="inputFile"
                            type={'file'}
                            onChange={onMainPhotoSelect}
                        />
                    </div>
                )}

                {editMode ? (
                    <ProfileDataFormReduxForm
                        initialValues={profile}
                        onSubmit={onSubmit}
                        profile={profile}
                    />
                ) : (
                    <ProfileData
                        activateEditMode={() => {
                            setEditMode(true)
                        }}
                        profile={profile}
                        isOwner={isOwner}
                    />
                )}

                <ProfileStatus
                    status={
                        status
                        // ? (
                        //     status
                        // ) : (
                        //     <div className={s.noStatusBar}>
                        //         User Have No Status
                        //     </div>
                        // )
                    }
                    updateStatus={updateStatus}
                />
            </div>
        </div>
    )
}

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    activateEditMode: () => void
}

const ProfileData: React.FC<ProfileDataPropsType> = ({
    profile,
    isOwner,
    activateEditMode,
}) => {
    return (
        <div className={s.desc}>
            {isOwner && <button onClick={activateEditMode}>Edit</button>}

            <div>
                <b>Fullname:</b> {profile.fullName}
            </div>

            <div>
                <b>Looking for a job:</b>{' '}
                {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            <div>
                <b>Skills and background:</b>{' '}
                {profile.lookingForAJob && (
                    <div>{profile.lookingForAJobDescription}</div>
                )}
            </div>

            <div>
                <b>About me:</b> {profile.aboutMe}
            </div>

            <div className={s.contacts}>
                <b>Contacts:</b>{' '}
                {Object.keys(profile.contacts).map((key) => {
                    return (
                        <Contact
                            key={key}
                            contactTitle={key}
                            contactValue={
                                profile.contacts[key as keyof ContactsType]
                            }
                        />
                    )
                })}
            </div>
        </div>
    )
}

type ContactPropsType = {
    contactTitle: string
    contactValue: string
}

const Contact: React.FC<ContactPropsType> = ({
    contactTitle,
    contactValue,
}) => {
    return (
        <div className={s.contact}>
            {contactTitle}: {contactValue}
        </div>
    )
}

export default Profileinfo
